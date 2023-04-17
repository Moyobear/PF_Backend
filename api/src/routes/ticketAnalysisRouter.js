const { Router } = require("express");
const {
  createTicketAnalisysHandler,
  allTicketAnalisysHandler,
  ticketAnalisysIdHandler,
  deleteTicketAnalisysHandler,
} = require("../handlers/ticketAnalisysHandlers/ticketAnalisysHandlers.js");
const {
  validatorCreateTicketAnalisys,
} = require("../middlewares/validators.js");
const jwtCheck = require("../middlewares/auth.js");

// *Acá definimos las rutas de turnos para análisis:
const ticketAnalisysRouter = Router();

ticketAnalisysRouter.get("/", jwtCheck, allTicketAnalisysHandler);

ticketAnalisysRouter.get("/:id", jwtCheck, ticketAnalisysIdHandler);

ticketAnalisysRouter.post(
  "/createTicketAnalisys",
  jwtCheck,
  validatorCreateTicketAnalisys,
  createTicketAnalisysHandler
);

ticketAnalisysRouter.delete(
  "/:id/delete",
  jwtCheck,
  deleteTicketAnalisysHandler
);

module.exports = ticketAnalisysRouter;
