const { Router } = require("express");
const {
  validatorCreateDoctor,
  validatorUpdateDoctor,
} = require("../middlewares/validators.js");
const {
  getNamesHandler,
  getDoctorsHandler,
  getDniHandler,
  getDoctorIdHandler,
  createDoctorHandler,
  updateDoctorHandler,
  deleteDoctorHandler,
  updateScheduleDoctorHandler,
} = require("../handlers/doctorHandlers/doctorHandlers.js");

// *Acá definimos las rutas de medicos:
const doctorRouter = Router();

doctorRouter.put("/shedule", updateScheduleDoctorHandler);

doctorRouter.get("/names", getNamesHandler);

doctorRouter.get("/dni", getDniHandler);

doctorRouter.get("/", getDoctorsHandler);

doctorRouter.get("/:id", getDoctorIdHandler);

doctorRouter.post("/", validatorCreateDoctor, createDoctorHandler);

doctorRouter.put("/", validatorUpdateDoctor, updateDoctorHandler);

doctorRouter.delete("/:id/delete", deleteDoctorHandler);

module.exports = doctorRouter;
