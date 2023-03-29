const { Router } = require("express");
const { 
    GET_ANALYSIS,
    POST_ANALYSIS,
    PUT_ANALYSIS,
    DELETE_ANALYSIS} = require('../handlers/analysisHandler/analysisHandler.js')



// *Acá definimos las rutas de especialidades:

const AnalysisRouter = Router();

specialityRouter.get("/", GET_ANALYSIS)


specialityRouter.post("/", POST_ANALYSIS)


specialityRouter.put("/", PUT_ANALYSIS)


specialityRouter.delete("/", DELETE_ANALYSIS)


module.exports = AnalysisRouter;
