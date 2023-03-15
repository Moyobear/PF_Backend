const { Router } = require("express");

// *Acá definimos las rutas de servicios:
const servicioRouter = Router();

servicioRouter.get("/", getServiciosHandler);

servicioRouter.get("/:id", getServicioIdHandler);

servicioRouter.post("/", createServicioHandler);

servicioRouter.delete("/:id/delete", deleteServicioHandler);

module.exports = servicioRouter;
