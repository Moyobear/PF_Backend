const { Router } = require("express");

const {
  POST_PAGO,
  GET_FILE,
  POST_PAGO_V2,
  GET_FILE_V2,
} = require("../handlers/mercadoPagoHandlers/mercadoPagoHandlers");
const jwtCheck = require("../middlewares/auth.js");

const mercadoPagoRouter = Router();

mercadoPagoRouter.post("/", jwtCheck, POST_PAGO);
mercadoPagoRouter.get("/feedback", GET_FILE);

mercadoPagoRouter.post("/v2", jwtCheck, POST_PAGO_V2);
mercadoPagoRouter.get("/v2/feedback", GET_FILE_V2);

module.exports = mercadoPagoRouter;
