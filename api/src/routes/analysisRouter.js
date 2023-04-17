const { Router } = require("express");
const {
  GET_ANALYSIS,
  POST_ANALYSIS,
  PUT_ANALYSIS,
  DELETE_ANALYSIS,
} = require("../handlers/analysisHandlers/analysisHandlers");

const { validatorCreateAnalysis } = require("../middlewares/validators.js");
const jwtCheck = require("../middlewares/auth.js");

// *Acá definimos las rutas de especialidades:

const analysisRouter = Router();

analysisRouter.get("/", GET_ANALYSIS);

analysisRouter.post("/", jwtCheck, validatorCreateAnalysis, POST_ANALYSIS);

// analysisRouter.post("/", POST_ANALYSIS);

analysisRouter.put("/", jwtCheck, PUT_ANALYSIS);

analysisRouter.delete("/:id", jwtCheck, DELETE_ANALYSIS);

module.exports = analysisRouter;
