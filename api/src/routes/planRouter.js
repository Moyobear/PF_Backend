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

// !POR DEFINIR...

// 
planRouter.get("/", )

module.export = planRouter;
