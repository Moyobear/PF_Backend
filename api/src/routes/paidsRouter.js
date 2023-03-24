const { Router } = require("express");
const {
    getPaidsHandler,
    getPaidByIdHandler
} = require("../handlers/paidHandlers/paidHandlers.js")

// *Acá definimos las rutas de usuarios:
const paidsRouter = Router();

// !POR DEFINIR...

paidsRouter.get("/", getPaidsHandler)
paidsRouter.get("/:id", getPaidByIdHandler)

module.export = paidsRouter;
