const { Router } = require("express");
const {
  getPlansHandler,
  getPlanByIdHandler,
  updatePlanHandler,
  addPlanHandler,
  deletePlanHandler,
} = require("../handlers/planHandlers/planHandlers.js");

const { validatorCreatePlan } = require("../middlewares/validators.js");
const jwtCheck = require("../middlewares/auth.js");

// *Acá definimos las rutas de plan:
const planRouter = Router();

planRouter.get("/", getPlansHandler);
planRouter.get("/:id", getPlanByIdHandler);
planRouter.put("/", jwtCheck, updatePlanHandler);
planRouter.post("/", jwtCheck, validatorCreatePlan, addPlanHandler);
planRouter.delete("/:id", jwtCheck, deletePlanHandler);

module.exports = planRouter;
