const {
  createTicket,
} = require("../../controllers/ticketMedicalControllers/ticketMedicalControllers.js");

const ticketMedicalHandler = async (req, res) => {
  try {
    const {
      title,
      observations,
      doctorId,
      patientId,
      date,
      hour_start,
      hour_end,
    } = req.body;
    const request = await createTicket(
      title,
      observations,
      doctorId,
      patientId,
      date,
      hour_start,
      hour_end
    );
    return res.status(201).json(request);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

module.exports = {
  ticketMedicalHandler,
};
