const { Router } = require("express");
const {
  validatorCreateDoctor,
  validatorUpdateDoctor,
} = require("../middlewares/validators.js");
const jwtCheck = require("../middlewares/auth.js");
const {
  getNamesHandler,
  getDoctorsDeletedHandler,
  getDoctorsHandler,
  getDniHandler,
  getDoctorIdHandler,
  createDoctorHandler,
  updateDoctorHandler,
  deleteDoctorHandler,
  deleteScheduleHandler,
  updateMedicalGuardHandler,
  recoverDoctorHandler,
} = require("../handlers/doctorHandlers/doctorHandlers.js");

// *Acá definimos las rutas de medicos:
const doctorRouter = Router();

doctorRouter.get("/doctorsDeleted", jwtCheck, getDoctorsDeletedHandler);

doctorRouter.get("/names", getNamesHandler);

doctorRouter.get("/dni", getDniHandler);

doctorRouter.get("/", getDoctorsHandler);

doctorRouter.get("/:id", getDoctorIdHandler);

doctorRouter.post("/", jwtCheck, validatorCreateDoctor, createDoctorHandler);

doctorRouter.put("/", jwtCheck, validatorUpdateDoctor, updateDoctorHandler);

doctorRouter.put("/recoverDoctor", jwtCheck, recoverDoctorHandler);

doctorRouter.put("/medicalGuard", jwtCheck, updateMedicalGuardHandler);

doctorRouter.delete("/delSchedule", jwtCheck, deleteScheduleHandler);

doctorRouter.delete("/:id/delete", jwtCheck, deleteDoctorHandler);

module.exports = doctorRouter;
