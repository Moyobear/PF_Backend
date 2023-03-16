const {
  searchPacienteByName,
  getAllPacientes,
  findDniPaciente,
  getPacienteById,
  createPaciente,
  updatePaciente,
  deletePaciente,
} = require("../../controllers/pacienteControllers/pacienteControllers.js");

// *Handler para buscar un paciente por nombre o para traerlos todos:
const getPacientesHandler = async (req, res) => {
  try {
    const { nombre } = req.query;
    const request = nombre
      ? await searchPacienteByName(nombre)
      : await getAllPacientes();
    return res.status(200).json(request);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// *Handler para buscar un paciente por DNI:
const getDniPacienteHandler = async (req, res) => {
  try {
    const { dni } = req.body;
    const request = findDniPaciente(dni);
    return res.status(200).json(request);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// *Handler para buscar un paciente por ID:
const getPacienteIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) throw Error("El Id es necesario para buscar al Paciente");
    const request = await getPacienteById(id);
    return res.status(200).json(request);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// *Handler para crear un paciente:
const createPacienteHandler = async (req, res) => {
  try {
    const {
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
    } = req.body;
    const request = await createPaciente(
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
    );
    return res.status(201).json(request);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// *Handler para actualizar un paciente:
const updatePacienteHandler = async (req, res) => {
  try {
    const {
      id,
      email,
      telefono,
      direccion,
      enfermedades,
      medicamentos,
      alergias,
    } = req.body;

    const request = await updatePaciente(
      id,
      email,
      telefono,
      direccion,
      enfermedades,
      medicamentos,
      alergias
    );
    return res.status(201).json(request);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// *Handler para eliminar un paciente:
const deletePacienteHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const request = await deletePaciente(id);
    return res.status(200).json({ message: request });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getPacientesHandler,
  getDniPacienteHandler,
  getPacienteIdHandler,
  createPacienteHandler,
  updatePacienteHandler,
  deletePacienteHandler,
};
