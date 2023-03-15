const { Router } = require("express");
const {
  validadorCreateMedico,
  validadorUpdateMedico,
} = require("../middlewares/validadores.js");
const {
  getNombresHandler,
  getMedicosHandler,
  getDniHandler,
  getMedicoIdHandler,
  createMedicoHandler,
  updateMedicoHandler,
  deleteMedicoHandler,
} = require("../handlers/medicoHandlers/medicoHandlers.js");

// *Acá definimos las rutas de medicos:
const medicoRouter = Router();

medicoRouter.get("/nombres", getNombresHandler);

medicoRouter.get("/dni", getDniHandler);

medicoRouter.get("/", getMedicosHandler);

medicoRouter.get("/:id", getMedicoIdHandler);

medicoRouter.post("/", validadorCreateMedico, createMedicoHandler);

medicoRouter.put("/", validadorUpdateMedico, updateMedicoHandler);

medicoRouter.delete("/:id/delete", deleteMedicoHandler);

module.exports = medicoRouter;
