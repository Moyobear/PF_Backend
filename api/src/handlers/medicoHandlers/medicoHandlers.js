const {
  getAllNames,
  searchMedicoByName,
  getAllMedicos,
  findDni,
  getMedicoById,
  createMedico,
  updateMedico,
  deleteMedico,
} = require("../../controllers/medicoControllers/medicoControllers.js");

const getNombresHandler = async (req, res) => {
  try {
    const request = await getAllNames();
    return res.status(200).json(request);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const getDniHandler = async (req, res) => {
  try {
    const { dni } = req.body;
    const request = findDni(dni);
    return res.status(200).json(request);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const getMedicosHandler = async (req, res) => {
  try {
    const { nombre } = req.query;
    const request = nombre
      ? await searchMedicoByName(nombre)
      : await getAllMedicos();
    return res.status(200).json(request);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const getMedicoIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) throw Error("El Id es necesario para buscar al Médico");
    const request = await getMedicoById(id);
    return res.status(200).json(request);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const createMedicoHandler = async (req, res) => {
  try {
    const {
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
      foto,
    } = req.body;
    const request = await createMedico(
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
    );
    return res.status(201).json(request);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const updateMedicoHandler = async (req, res) => {
  try {
    const { id, email, telefono, direccion, foto } = req.body;
    const request = await updateMedico(id, email, telefono, direccion, foto);
    return res.status(201).json(request);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const deleteMedicoHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const request = await deleteMedico(id);
    return res.status(200).json({ message: request });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getNombresHandler,
  getMedicosHandler,
  getDniHandler,
  getMedicoIdHandler,
  createMedicoHandler,
  updateMedicoHandler,
  deleteMedicoHandler,
};
