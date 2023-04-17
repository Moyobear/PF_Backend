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
  getPatientsDeletedHandler,
  recoverPatientHandler,
} = require("../handlers/patientHandlers/patientHandlers.js");
const jwtCheck = require("../middlewares/auth.js");

// *Acá definimos las rutas de pacientes:
const patientRouter = Router();

patientRouter.get("/patientsDeleted", jwtCheck, getPatientsDeletedHandler);

patientRouter.get("/", getPatientsHandler);

patientRouter.get("/dni", getDniPatientHandler);

patientRouter.get("/:id", getPatientIdHandler);

patientRouter.post("/", jwtCheck, validatorCreatePatient, createPatientHandler);

patientRouter.put("/", jwtCheck, validatorUpdatePatient, updatePatientHandler);

patientRouter.put("/recoverPatient", jwtCheck, recoverPatientHandler);

patientRouter.delete("/:id/delete", jwtCheck, deletePatientHandler);

module.exports = patientRouter;
