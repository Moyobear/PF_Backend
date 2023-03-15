const { Router } = require("express");

const {
  getPacientesHandler,
  getDniPacienteHandler,
  getPacienteIdHandler,
  createPacienteHandler,
  updatePacienteHandler,
  deletePacienteHandler,
} = require("../handlers/pacienteHandlers/pacienteHandlers.js");

// *Acá definimos las rutas de pacientes:
const pacienteRouter = Router();

pacienteRouter.get("/", getPacientesHandler);

pacienteRouter.get("/dni", getDniPacienteHandler);

pacienteRouter.get("/:id", getPacienteIdHandler);

pacienteRouter.post("/", createPacienteHandler);

pacienteRouter.put("/", updatePacienteHandler);

pacienteRouter.delete("/:id/delete", deletePacienteHandler);

module.exports = pacienteRouter;
