const { Router } = require("express");

// *Acá definimos las rutas de turnos:
const turnoRouter = Router();

turnoRouter.get("/", getTurnosHandler);

turnoRouter.get("/:id", getTurnoIdHandler);

turnoRouter.post("/", createTurnoHandler);

turnoRouter.put("/", updateTurnoHandler);

turnoRouter.delete("/:id/delete", deleteTurnoHandler);

module.exports = turnoRouter;
