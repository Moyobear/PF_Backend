const {
  searchPatientByName,
  getAllPatients,
  findDniPatient,
  getPatientById,
  createPatient,
  updatePatient,
  deletePatient,
} = require("../../controllers/patientControllers/patientControllers.js");

// *Handler para buscar un paciente por nombre o para traerlos todos:
const getPatientsHandler = async (req, res) => {
  try {
    const { full_name } = req.query;
    const request = full_name
      ? await searchPatientByName(full_name)
      : await getAllPatients();
    return res.status(200).json(request);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// *Handler para buscar un paciente por DNI:
const getDniPatientHandler = async (req, res) => {
  try {
    const { dni } = req.body;
    const request = findDniPatient(dni);
    return res.status(200).json(request);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// *Handler para buscar un paciente por ID:
const getPatientIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) throw Error("El Id es necesario para buscar al Paciente");
    const request = await getPatientById(id);
    return res.status(200).json(request);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// *Handler para crear un paciente:
const createPatientHandler = async (req, res) => {
  try {
    const { full_name, dni, gender, age, birthday, phone, address } = req.body;
    const request = await createPatient(
      full_name,
      dni,
      gender,
      age,
      birthday,
      phone,
      address
    );
    return res.status(201).json(request);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// *Handler para actualizar un paciente:
const updatePatientHandler = async (req, res) => {
  try {
    const { id, phone, address } = req.body;

    const request = await updatePatient(id, phone, address);
    return res.status(201).json(request);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// *Handler para eliminar un paciente:
const deletePatientHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const request = await deletePatient(id);
    return res.status(200).json({ message: request });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getPatientsHandler,
  getDniPatientHandler,
  getPatientIdHandler,
  createPatientHandler,
  updatePatientHandler,
  deletePatientHandler,
};
