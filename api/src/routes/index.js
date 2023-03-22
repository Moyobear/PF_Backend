const { Router } = require("express");
// Importar todos los routers;
const patientRouter = require("./patientRouter.js");
const doctorRouter = require("./doctorRouter.js");
const ticketMedicalRouter = require("./ticketMedicalRouter.js");

const router = Router();

// *Configurar los routers:
router.use("/patient", patientRouter);
router.use("/doctor", doctorRouter);
router.use("/ticketMedical", ticketMedicalRouter);

module.exports = router;
