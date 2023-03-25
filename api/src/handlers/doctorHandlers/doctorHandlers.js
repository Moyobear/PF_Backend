const {
  getAllNames,
  searchDoctorByName,
  getAllDoctors,
  findDni,
  getDoctorById,
  createDoctor,
  updateDoctor,
  deleteDoctor,
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
    const request = await findDni(dni);
    return res.status(200).json(request);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const getDoctorsHandler = async (req, res) => {
  try {
    const { full_name } = req.query;
    const request = full_name
      ? await searchDoctorByName(full_name)
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
      specialities,
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
      specialities
    );
    return res.status(201).json(request);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const updateDoctorHandler = async (req, res) => {
  try {
    const { id, phone, address, image } = req.body;
    const request = await updateDoctor(id, phone, address, image);
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

module.exports = {
  getNamesHandler,
  getDoctorsHandler,
  getDniHandler,
  getDoctorIdHandler,
  createDoctorHandler,
  updateDoctorHandler,
  deleteDoctorHandler,
};
