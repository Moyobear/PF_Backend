const { Router } = require("express");
const {ticketMedicalHandler, confirmTicketHandler} = require("../handlers/ticketMedicalHandlers/ticketMedicalHandlers.js");
const {
  validatorCreateTicketMedical,
} = require("../middlewares/validators.js");

// *Acá definimos las rutas de turnos médicos:
const ticketMedicalRouter = Router();

ticketMedicalRouter.post(
  "/createTicketMedical",
  validatorCreateTicketMedical,
  ticketMedicalHandler
);

ticketMedicalRouter.put("/confirmTicket", confirmTicketHandler)

module.exports = ticketMedicalRouter;
