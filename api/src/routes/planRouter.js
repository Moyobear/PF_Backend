const { Router } = require("express");
const {
    getPlansHandler,
    getPlanByIdHandler,
    updatePlanHandler,
    addPlanHandler,
    deletePlanHandler
} = require("../handlers/planHandlers/planHandlers.js")

// *Acá definimos las rutas de plan:
const planRouter = Router();


planRouter.get("/", getPlansHandler)
planRouter.get("/:id", getPlanByIdHandler)
planRouter.put("/", updatePlanHandler)
planRouter.post("/", addPlanHandler)
planRouter.delete("/:id", deletePlanHandler)

module.export = planRouter;
