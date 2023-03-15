const { Paciente, Turno, Usuario } = require("../../db");

module.exports = {
  searchPacienteByName,
  getAllPacientes,
  findDniPaciente,
  getPacienteById,
  createPAciente,
  updatePaciente,
  deletePaciente,
};
