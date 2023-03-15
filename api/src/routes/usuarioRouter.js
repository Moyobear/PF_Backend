const { Router } = require("express");

// *Acá definimos las rutas de usuarios:
const usuarioRouter = Router();

usuarioRouter.get("/", getUsuariosHandler);

usuarioRouter.get("/:id", getUsuarioIdHandler);

usuarioRouter.post("/", createUsuarioHandler);

usuarioRouter.put("/", updateUsuarioHandler);

usuarioRouter.delete("/:id/delete", deleteUsuarioHandler);

module.export = usuarioRouter;
