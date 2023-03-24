const { Patient, TicketMedical, User, Plan } = require("../../db");
const { Op } = require("sequelize");

// *Helper para estructurar la info que recibimos de la base de datos y enviarla al front:
let filterPatientDB = (item) => {
  return {
    id: item.id,
    full_name: item.full_name,
    dni: item.dni,
    gender: item.gender,
    age: item.age,
    birthday: item.birthday,
    phone: item.phone,
    address: item.address,
    user: item.User,
    consultations_per_plan: item.Plan,
    ticketMedical: item.TicketMedical,
    is_delete: item.is_delete,
  };
};

// *Este helper nos permite traer los Pacientes de la base de datos e implementarlo en las rutas que lo requieran:
const getPatients = async () => {
  const request = await Patient.findAll({
    include: {
      model: TicketMedical,
      // through: { attributes: [] },
    },
    include: {
      model: User,
      attributes: ["full_name"],
      // through: { attributes: [] },
    },
    include: {
      model: Plan,
      attributes: ["consultations_per_plan"],
      // through: { attributes: [] },
    },
  });
  let filtered = request
    .map((item) => filterPatientDB(item))
    .filter((item) => item.is_delete !== true)
    .flat();
  return filtered;
};

// *Este controller busca a un paciente por nombre:
const searchPatientByName = async (full_name) => {
  const request = await Patient.findOne({
    where: { name: { [Op.iLike]: `%${full_name}%` } },
    include: {
      model: TicketMedical,
      // through: { attributes: [] },
    },
    include: {
      model: User,
      attributes: ["full_name"],
      // through: { attributes: [] },
    },
    include: {
      model: Plan,
      attributes: ["consultations_per_plan"],
      // through: { attributes: [] },
    },
  });
  if (request && request.is_delete === false) {
    let filtered = filterDB(request);
    return [filtered];
  } else {
    return "No existe Paciente con ese nombre";
  }
};

// *Este controller obtiene todos los pacientes:
const getAllPatients = async () => {
  const request = await getPatients();
  return request;
};

// *Este controller busca a un paciente por DNI:
const findDniPatient = async (dni) => {
  const request = await getPatients();
  let search = request.filter((item) => item.dni === dni);
  if (!search) {
    return "No existe Paciente con ese DNI";
  } else {
    return [search];
  }
};

// *Este controller busca a un paciente por id:
const getPatientById = async (id) => {
  const request = await getPatients();
  const patient = request.filter((item) => item.id === id);
  return patient[0];
};

// *Este controller permite crear un paciente:
const createPatient = async (
  full_name,
  dni,
  gender,
  age,
  birthday,
  phone,
  address
) => {
  const request = await Patient.create({
    full_name,
    dni,
    gender,
    age,
    birthday,
    phone,
    address,
  });
  const patient_created = await findDniPaciente(dni);

  return {
    message: "El registro del paciente se ha creado exitosamente",
    patient_created,
  };
};

// *Este controller permite actualizar un paciente buscándolo por id:
const updatePatient = async (id, phone, address) => {
  const request = await Paciente.findByPk(id, {
    include: {
      model: TicketMedical,
      // through: { attributes: [] },
    },
    include: {
      model: User,
      attributes: ["full_name"],
      // through: { attributes: [] },
    },
    include: {
      model: Plan,
      attributes: ["consultations_per_plan"],
      // through: { attributes: [] },
    },
  });
  request.set({
    phone: phone,
    address: phone,
  });

  await request.save();

  let filtered = filterPatientDB(request);
  return filtered;
};

// *Este controller elimina un paciente por id:
const deletePatient = async (id) => {
  const request = await Patient.findByPk(id);
  request.set({
    is_delete: true,
  });
  await request.save();

  return "El Paciente fue borrado exitosamente";
};

module.exports = {
  searchPatientByName,
  getAllPatients,
  findDniPatient,
  getPatientById,
  createPatient,
  updatePatient,
  deletePatient,
};
