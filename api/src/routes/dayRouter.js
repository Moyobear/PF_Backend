const { Router } = require("express");
const {
  getDaysHandler,
  createDayHandler,
} = require("../handlers/dayHandlers/dayHandlers.js");
const jwtCheck = require("../middlewares/auth.js");

const dayRouter = Router();

dayRouter.get("/", getDaysHandler);
dayRouter.post("/", jwtCheck, createDayHandler);

module.exports = dayRouter;
