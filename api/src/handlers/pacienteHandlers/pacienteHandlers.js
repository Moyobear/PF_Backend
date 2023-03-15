const {
  searchPacienteByName,
  getAllPacientes,
  findDniPaciente,
  getPacienteById,
  createPAciente,
  updatePaciente,
  deletePaciente,
} = require("../../controllers/pacienteControllers/pacienteControllers.js");

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

const getDniPacienteHandler = async (req, res) => {
  try {
    const { dni } = req.body;
    const request = findDniPaciente(dni);
    return res.status(200).json(request);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

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

const createPacienteHandler = async (req, res) => {
  try {
    const {
      nombre,
      apellido,
      dni,
      genero,
      fecha_nacimiento,
      email,
      telefono,
      direccion,
      enfermedades,
      medicamentos,
      alergias,
    } = req.body;
    const request = await createPAciente(
      nombre,
      apellido,
      dni,
      genero,
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
