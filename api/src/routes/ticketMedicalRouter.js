const { Router } = require("express");
const ticketMedicalHandler = require("../handlers/ticketMedicalHandlers/ticketMedicalHandlers.js");

// *Acá definimos las rutas de turnos médicos:
const ticketMedicalRouter = Router();

// !POR DEFINIR...
ticketMedicalRouter.post("/createTicketMedical", ticketMedicalHandler);

module.exports = ticketMedicalRouter;
