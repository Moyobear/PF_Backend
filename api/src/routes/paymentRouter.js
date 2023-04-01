const { Router } = require("express");
const {
  allPaymentsUserHandler,
  paymentIdHandler,
  createPaymentPlanHandler,
  createPaymentAnalysisHandler
} = require("../handlers/paymentHandlers/paymentHandlers.js");

// *Acá definimos las rutas de payments:
const paymentRouter = Router();

paymentRouter.get("/", allPaymentsUserHandler);

paymentRouter.get("/:id", paymentIdHandler);

paymentRouter.post("/createPaymentPlan", createPaymentPlanHandler);

paymentRouter.post("/createPaymentAnalysis", createPaymentAnalysisHandler);

module.exports = paymentRouter;
