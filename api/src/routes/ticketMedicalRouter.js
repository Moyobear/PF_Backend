const { Router } = require("express");
const {
  ticketMedicalHandler,
  confirmTicketHandler,
  allTicketHandler,
  ticketIdHandler,
  deleteTicketHandler,
  destroyTicketHandler,
} = require("../handlers/ticketMedicalHandlers/ticketMedicalHandlers.js");
const {
  validatorCreateTicketMedical,
} = require("../middlewares/validators.js");
const jwtCheck = require("../middlewares/auth.js");

// *Acá definimos las rutas de turnos médicos:
const ticketMedicalRouter = Router();

ticketMedicalRouter.get("/", jwtCheck, allTicketHandler);

ticketMedicalRouter.get("/:id", jwtCheck, ticketIdHandler);

ticketMedicalRouter.post(
  "/createTicketMedical",
  jwtCheck,
  validatorCreateTicketMedical,
  ticketMedicalHandler
);

ticketMedicalRouter.put("/confirmTicket", jwtCheck, confirmTicketHandler);

ticketMedicalRouter.delete("/destroyTicket", jwtCheck, destroyTicketHandler);

ticketMedicalRouter.delete("/:id/delete", jwtCheck, deleteTicketHandler);

module.exports = ticketMedicalRouter;
