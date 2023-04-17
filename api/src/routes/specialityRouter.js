const { Router } = require("express");
const {
  GET_SPECIALITY,
  POST_SPECIALITY,
  PUT_SPECIALITY,
  DELETE_SPECIALITY,
} = require("../handlers/specialityHandlers/specialityHandlers");

const { validatorCreateSpeciality } = require("../middlewares/validators.js");
const jwtCheck = require("../middlewares/auth.js");

// *Acá definimos las rutas de especialidades:

const specialityRouter = Router();

specialityRouter.get("/", jwtCheck, GET_SPECIALITY);

specialityRouter.post(
  "/",
  jwtCheck,
  validatorCreateSpeciality,
  POST_SPECIALITY
);

specialityRouter.put("/", jwtCheck, PUT_SPECIALITY);

specialityRouter.delete("/:id", jwtCheck, DELETE_SPECIALITY);

module.exports = specialityRouter;
