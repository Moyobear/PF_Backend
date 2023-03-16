const { Medico, Servicio } = require("../../db");
const { Op } = require("sequelize");

// *Helper para estructurar la info que recibimos de la base de datos y enviarla al front:
let filtroDB = (item) => {
  return {
    id: item.id,
    codigo: item.codigo,
    dni: item.dni,
    nombre: item.nombre,
    apellido: item.apellido,
    servicios: item.Servicios.map((element) => element.especialidad).flat(),
    genero: item.genero,
    edad: item.edad,
    fecha_nacimiento: item.fecha_nacimiento,
    email: item.email,
    telefono: item.telefono,
    direccion: item.direccion,
    foto: item.foto,
  };
};

// *Este helper nos permite traer los Medicos de la base de datos e implementarlo en las rutas que lo requieran:
const getMedicos = async () => {
  const request = await Medico.findAll({
    include: {
      model: Servicio,
      attributes: ["especialidad"],
      through: { attributes: [] },
    },
  });
  let filtro = request.map((item) => filtroDB(item));
  return filtro;
};

// *Este controller busca a un paciente por nombre:
const getAllNames = async () => {
  const request = await Medico.findAll();
  const nombres = request.map((item) => {
    item.apellido, item.nombre;
  });
  return nombres;
};

// *Este controller busca a un médico por nombre:
const searchMedicoByName = async (nombre) => {
  const request = await Medico.findOne({
    where: { name: { [Op.iLike]: `%${nombre}%` } },
    include: {
      model: Servicio,
      attributes: ["especialidad"],
      through: { attributes: [] },
    },
  });
  if (request) {
    let filtro = filtroDB(request);
    return [filtro];
  } else {
    return "No existe Médico con ese nombre";
  }
};

// *Este controller busca a un médico por DNI:
const findDni = async (dni) => {
  const request = await getMedicos();
  let busqueda = request.filter((item) => item.dni === dni);
  if (!busqueda) {
    return "No existe Médico con ese DNI";
  } else {
    return [busqueda];
  }
};

// *Este controller obtiene todos los médicos:
const getAllMedicos = async () => {
  const request = await getMedicos();
  return request;
};

// *Este controller busca a un médico por id:
const getMedicoById = async (id) => {
  const request = await getMedicos();
  const medico = request.filter((item) => item.id === id);
  return medico[0];
};

// *Este controller permite crear un médico:
const createMedico = async (
  codigo,
  dni,
  nombre,
  apellido,
  servicios,
  genero,
  edad,
  fecha_nacimiento,
  email,
  telefono,
  direccion,
  foto
) => {
  let newMedico = await Medico.create({
    codigo,
    dni,
    nombre,
    apellido,
    genero,
    edad,
    fecha_nacimiento,
    email,
    telefono,
    direccion,
    foto,
  });

  await servicios.forEach(function (item) {
    Servicio.findOrCreate({ where: { especielidad: item } });
  });
  let medico_especialidad = await Servicio.findAll({
    where: { especialidad: servicios },
  });
  await newMedico.addServicio(medico_especialidad);

  const medico_creado = await findDni(dni);
  return {
    message: "El registro del médico se ha creado exitosamente",
    medico_creado,
  };
};

// *Este controller permite actualizar un médico buscándolo por id:
const updateMedico = async (id, email, telefono, direccion, foto) => {
  const request = await Medico.findByPk(id);
  request.set({
    email: email,
    telefono: telefono,
    direccion: direccion,
    foto: foto,
  });

  await request.save();

  let filtro = filtroDB(request);
  return filtro;
};

// *Este controller elimina un médico por id:
const deleteMedico = async (id) => {
  const request = await Medico.findByPk(id);
  await request.destroy();

  return "El Médico fue borrado exitosamente";
};

module.exports = {
  getAllNames,
  searchMedicoByName,
  getAllMedicos,
  findDni,
  getMedicoById,
  createMedico,
  updateMedico,
  deleteMedico,
};
