const { Router } = require("express");
const {
  validatorCreatePatient,
  validatorUpdatePatient,
} = require("../middlewares/validators.js");

const {
  getPatientsHandler,
  getDniPatientHandler,
  getPatientIdHandler,
  createPatientHandler,
  updatePatientHandler,
  deletePatientHandler,
} = require("../handlers/patientHandlers/patientHandlers.js");

// *Acá definimos las rutas de pacientes:
const patientRouter = Router();

// TODO: rutas para setear los turnos de los ticketMedical y establecerlos en la tabla patient.

patientRouter.get("/", getPatientsHandler);

patientRouter.get("/dni", getDniPatientHandler);

patientRouter.get("/:id", getPatientIdHandler);

patientRouter.post("/", validatorCreatePatient, createPatientHandler);

patientRouter.put("/", validatorUpdatePatient, updatePatientHandler);

patientRouter.delete("/:id/delete", deletePatientHandler);

module.exports = patientRouter;
