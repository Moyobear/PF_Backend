const { Doctor, Speciality, Schedule, User } = require("../../db");
const { Op } = require("sequelize");

// *Helper para estructurar la info que recibimos de la base de datos y enviarla al front:
let filterDB = (item) => {
  return {
    id: item.id,
    dni: item.dni,
    code: item.code,
    full_name: item.full_name,
    speciality: item.Speciality.map((element) => element.speciality).flat(),
    gender: item.gender,
    age: item.age,
    birthday: item.birthday,
    phone: item.phone,
    address: item.address,
    image: item.image,
    is_delete: item.is_delete,
    schedule: item.Schedule,
    user: item.User,
  };
};

// *Este helper nos permite traer los Medicos de la base de datos, filtrar a través de la propiedad is_delete,  implementarlo en las rutas que lo requieran:
const getDoctors = async () => {
  const request = await Doctor.findAll({
    include: {
      model: Speciality,
      attributes: ["speciality"],
      through: { attributes: [] },
    },
    include: {
      model: Schedule,
      through: { attributes: [] },
    },
    include: {
      model: User,
      // through: { attributes: [] },
    },
  });
  let filtered = request
    .map((item) => filterDB(item))
    .filter((item) => item.is_delete !== true)
    .flat();
  return filtered;
};

// *Este controller busca a un paciente por nombre:
const getAllNames = async () => {
  const request = await Doctor.findAll();
  const names = request
    .map((item) => item.full_name)
    .filter((item) => item.is_delete !== true)
    .flat();
  return names;
};

// *Este controller busca a un médico por nombre:
const searchDoctorByName = async (full_name) => {
  const request = await Medico.findOne({
    where: { name: { [Op.iLike]: `%${full_name}%` } },
    include: {
      model: Speciality,
      attributes: ["speciality"],
      through: { attributes: [] },
    },
    include: {
      model: Schedule,
      through: { attributes: [] },
    },
    include: {
      model: User,
      // through: { attributes: [] },
    },
  });
  if (request && request.is_delete === false) {
    let filtered = filterDB(request);
    return [filtered];
  } else {
    return "No existe Médico con ese nombre";
  }
};

// *Este controller busca a un médico por DNI:
const findDni = async (dni) => {
  const request = await getDoctors();
  let search = request.filter((item) => item.dni === dni);
  if (!search) {
    return "No existe Médico con ese DNI";
  } else {
    return search;
  }
};

// *Este controller obtiene todos los médicos:
const getAllDoctors = async () => {
  const request = await getDoctors();
  return request;
};

// *Este controller busca a un médico por id:
const getDoctorById = async (id) => {
  const request = await getDoctors();
  const doctor = request.filter((item) => item.id === id);
  return doctor[0];
};

// *Este controller permite crear un médico:
const createDoctor = async (
  code,
  dni,
  full_name,
  gender,
  age,
  birthday,
  phone,
  address,
  image,
  speciality
) => {
  let newDoctor = await Doctor.create({
    code,
    dni,
    full_name,
    gender,
    age,
    birthday,
    phone,
    address,
    image,
  });

  let specialities = await Speciality.findAll({
    where: { speciality: speciality },
  });
  await newDoctor.addSpeciality(specialities);

  const doctor_created = await findDni(dni);
  return {
    message: "El registro del médico se ha creado exitosamente",
    doctor_created,
  };
};

// *Este controller permite actualizar un médico buscándolo por id:
const updateDoctor = async (id, phone, address, image) => {
  const request = await Doctor.findByPk(id, {
    include: {
      model: Speciality,
      attributes: ["speciality"],
      through: { attributes: [] },
    },
    // include: {
    //   model: Schedule,
    //   through: { attributes: [] },
    // },
    // include: {
    //   model: User,
    // },
  });
  request.set({
    phone: phone,
    address: address,
    image: image,
  });

  await request.save();

  let filtered = filterDB(request);
  return filtered;
};

// *Este controller elimina un médico por id:
const deleteDoctor = async (id) => {
  const request = await Doctor.findByPk(id);

  request.set({
    is_delete: true,
  });
  await request.save();
  return "El Médico fue borrado exitosamente";
};

module.exports = {
  getAllNames,
  searchDoctorByName,
  getAllDoctors,
  findDni,
  getDoctorById,
  createDoctor,
  updateDoctor,
  deleteDoctor,
};
