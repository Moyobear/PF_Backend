const { Router } = require("express");

// *Acá definimos las rutas de turnos médicos:
const ticketMedicalRouter = Router();

// !POR DEFINIR...
ticketMedicalRouter.post("/", ticketMedicalHandler);

module.exports = ticketMedicalRouter;
