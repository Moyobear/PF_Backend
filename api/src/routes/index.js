const { Router } = require("express");
// Importar todos los routers;
// const usuarioRouter = require("./usuarioRouter.js");
// const pacienteRouter = require("./pacienteRouter.js");
const medicoRouter = require("./medicoRouter.js");
// const servicioRouter = require("./servicioRouter.js");
// const turnoRouter = require("./turnoRouter");
// const paymentRouter = require("./paymentRouter");

const router = Router();

// *Configurar los routers:
// router.use("/usuarios", usuarioRouter);
// router.use("/pacientes", pacienteRouter);
router.use("/medicos", medicoRouter);
// router.use("/servicio", servicioRouter);
// router.use("/turnos", turnoRouter);
// router.use("/payment", paymentRouter);

module.exports = router;
