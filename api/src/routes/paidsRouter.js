const { Router } = require("express");
const {
    getPaidsHandler,
    getPaidByIdHandler,
    getPaidsByUserHandler,
    updateByIdHandler
} = require("../handlers/paidHandlers/paidHandlers.js")

// *Acá definimos las rutas de usuarios:
const paidsRouter = Router();

// !POR DEFINIR...

paidsRouter.get("/", getPaidsHandler)
paidsRouter.get("/:id", getPaidByIdHandler)
paidsRouter.get("/:userId/", getPaidsByUserHandler)
paidsRouter.put("/", updateByIdHandler)

module.exports = paidsRouter;
