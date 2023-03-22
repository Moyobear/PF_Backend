const { Doctor, Patient, Schedule, TicketMedical } = require("../../db");
// *Este controller permite crear el TicketMedical, crear el Schedule asociado a ese ticket y realizar la asociación de doctor a schedule y paciente a ticketMedical:
const createTicket = async (
  title,
  observations,
  doctorId,
  patientId,
  date,
  hour_start,
  hour_end
) => {
  const requestTicket = await TicketMedical.create({
    title,
    observations,
    date,
    hour_start,
  });

  const requestSchedule = await Schedule.create({ date, hour_start, hour_end });

  const doctor = await Doctor.findByPk(doctorId);
  await doctor.addSchedule(requestSchedule);
  await doctor.save();

  const patient = await Patient.findByPk(patientId);
  await patient.addTicketmedical(requestTicket);
  await patient.save();

  return;
};

module.exports = {
  createTicket,
};
