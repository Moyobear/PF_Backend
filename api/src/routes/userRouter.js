const { Router } = require("express");
const {GET_USER,
    GET_USER_ID,
    POST_USER,
    PUT_ISADMIN,
    DELETE_USER} = require('../handlers/userHandlers/userHandlers')


// *Acá definimos las rutas de usuarios:

const userRouter = Router();

userRouter.get('/', GET_USER)

userRouter.get('/:id', GET_USER_ID)

userRouter.post('/', POST_USER)

userRouter.put('/:id/isAdmin', PUT_ISADMIN)

userRouter.delete('/', DELETE_USER)

// !POR DEFINIR...

module.exports = userRouter;
