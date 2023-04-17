const { Router } = require("express");
const {
  getPaidByIdHandler,
  getPaidsByUserHandler,
} = require("../handlers/paidHandlers/paidHandlers.js");
const jwtCheck = require("../middlewares/auth.js");

// *Acá definimos las rutas de usuarios:
const paidsRouter = Router();

paidsRouter.get("/", jwtCheck, getPaidsByUserHandler);
paidsRouter.get("/:id", jwtCheck, getPaidByIdHandler);

module.exports = paidsRouter;
