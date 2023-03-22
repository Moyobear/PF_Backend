const {
  getAllNames,
  searchDoctorByName,
  getAllDoctors,
  findDni,
  getDoctorById,
  createDoctor,
  updateDoctor,
  deleteDoctor,
  updateScheduleDoctor
} = require("../../controllers/doctorControllers/doctorControllers.js");

const getNamesHandler = async (req, res) => {
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

const getDoctorsHandler = async (req, res) => {
  try {
    const { nombre } = req.query;
    const request = nombre
      ? await searchDoctorByName(nombre)
      : await getAllDoctors();
    return res.status(200).json(request);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const getDoctorIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) throw Error("El Id es necesario para buscar al Médico");
    const request = await getDoctorById(id);
    return res.status(200).json(request);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const createDoctorHandler = async (req, res) => {
  try {
    const {
      code,
      dni,
      full_name,
      gender,
      age,
      birthday,
      phone,
      address,
      image,
      speciality,
    } = req.body;
    const request = await createDoctor(
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
    );
    return res.status(201).json(request);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const updateDoctorHandler = async (req, res) => {
  try {
    const { id, email, telefono, direccion, foto } = req.body;
    const request = await updateDoctor(id, email, telefono, direccion, foto);
    return res.status(201).json(request);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const deleteDoctorHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const request = await deleteDoctor(id);
    return res.status(200).json({ message: request });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const updateScheduleDoctorHandler = async (req, res) => {
  try {
    const { idDoctor, schedule } = req.body;
    const request = await updateScheduleDoctor(idDoctor, schedule);
    return res.status(201).json(request);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

module.exports = {
  getNamesHandler,
  getDoctorsHandler,
  getDniHandler,
  getDoctorIdHandler,
  createDoctorHandler,
  updateDoctorHandler,
  deleteDoctorHandler,
  updateScheduleDoctorHandler,
};
