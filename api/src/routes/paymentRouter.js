const { Router } = require("express");
const {
  allPaymentsUserHandler,
  paymentIdHandler,
  createPaymentPlanHandler,
  createPaymentAnalysisHandler,
} = require("../handlers/paymentHandlers/paymentHandlers.js");

const {
  validatorCreatePaymentPlan,
  validatorCreatePaymentAnalysis,
} = require("../middlewares/validators.js");
const jwtCheck = require("../middlewares/auth.js");

// *Acá definimos las rutas de payments:
const paymentRouter = Router();

paymentRouter.get("/", jwtCheck, allPaymentsUserHandler);

paymentRouter.get("/:id", jwtCheck, paymentIdHandler);

paymentRouter.post(
  "/createPaymentPlan",
  jwtCheck,
  validatorCreatePaymentPlan,
  createPaymentPlanHandler
);

paymentRouter.post(
  "/createPaymentAnalysis",
  jwtCheck,
  validatorCreatePaymentAnalysis,
  createPaymentAnalysisHandler
);

module.exports = paymentRouter;
