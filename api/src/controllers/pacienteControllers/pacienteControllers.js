const { Paciente, Turno, Usuario } = require("../../db");
const { Op } = require("sequelize");

// *Helper para estructurar la info que recibimos de la base de datos y enviarla al front:
let filtroPacienteDB = (item) => {
  return {
    id: item.id,
    nombre: item.nombre,
    apellido: item.apellido,
    dni: item.dni,
    genero: item.genero,
    edad: item.edad,
    fecha_nacimiento: item.fecha_nacimiento,
    email: item.email,
    telefono: item.telefono,
    direccion: item.direccion,
    enfermedades: item.enfermedades,
    medicamentos: item.medicamentos,
    alergias: item.alergias,
    turnos: item.Turnos,
  };
};

// *Este helper nos permite traer los Pacientes de la base de datos e implementarlo en las rutas que lo requieran:
const getPacientes = async () => {
  const request = await Paciente.findAll({
    include: {
      model: Turno,
      //   attributes: [""],
      //   through: { attributes: [] },
    },
  });
  let filtro = request.map((item) => filtroPacienteDB(item));
  return filtro;
};

const searchPacienteByName = async (nombre) => {
  const request = await Paciente.findOne({
    where: { name: { [Op.iLike]: `%${nombre}%` } },
    include: {
      model: Turno,
      //   attributes: [""],
      //   through: { attributes: [] },
    },
  });
  if (request) {
    let filtro = filtroPacienteDB(request);
    return [filtro];
  } else {
    return "No existe Paciente con ese nombre";
  }
};

const getAllPacientes = async () => {
  const request = await getPacientes();
  return request;
};

const findDniPaciente = async (dni) => {
  const request = await getPacientes();
  let busqueda = request.filter((item) => item.dni === dni);
  if (!busqueda) {
    return "No existe Paciente con ese DNI";
  } else {
    return [busqueda];
  }
};

const getPacienteById = async (id) => {
  const request = await getPacientes();
  const paciente = request.filter((item) => item.id === id);
  return paciente[0];
};

const createPaciente = async (
  nombre,
  apellido,
  dni,
  genero,
  edad,
  fecha_nacimiento,
  email,
  telefono,
  direccion,
  enfermedades,
  medicamentos,
  alergias
) => {
  const request = await Paciente.create({
    nombre,
    apellido,
    dni,
    genero,
    edad,
    fecha_nacimiento,
    email,
    telefono,
    direccion,
    enfermedades,
    medicamentos,
    alergias,
  });

  const paciente_creado = await findDniPaciente(dni);

  return {
    message: "El registro del paciente se ha creado exitosamente",
    paciente_creado,
  };
};

const updatePaciente = async (
  id,
  email,
  telefono,
  direccion,
  enfermedades,
  medicamentos,
  alergias
) => {
  const request = await Paciente.findByPk(id, {
    include: {
      model: Turno,
      //   attributes: [""],
      //   through: { attributes: [] },
    },
  });
  request.set({
    email: email,
    telefono: telefono,
    enfermedades: enfermedades,
    medicamentos: medicamentos,
    alergias: alergias,
  });

  await request.save();

  let filtro = filtroPacienteDB(request);
  return filtro;
};

const deletePaciente = async (id) => {
  const request = await Paciente.findByPk(id);
  await request.destroy();

  return "El Paciente fue borrado exitosamente";
};

module.exports = {
  searchPacienteByName,
  getAllPacientes,
  findDniPaciente,
  getPacienteById,
  createPaciente,
  updatePaciente,
  deletePaciente,
};
