const { Router } = require("express");
const {
  GET_USER,
  GET_USER_ID,
  POST_USER,
  PUT_ISADMIN,
  DELETE_USER,
  PUT_USER,
} = require("../handlers/userHandlers/userHandlers");

const { validatorCreateUser } = require("../middlewares/validators.js");
const jwtCheck = require("../middlewares/auth.js");

// *Acá definimos las rutas de usuarios:

const userRouter = Router();

userRouter.get("/", jwtCheck, GET_USER);

userRouter.get("/:id", jwtCheck, GET_USER_ID);

userRouter.post("/", jwtCheck, validatorCreateUser, POST_USER);

userRouter.put("/", jwtCheck, PUT_USER);

userRouter.put("/isAdmin", jwtCheck, PUT_ISADMIN);

userRouter.delete("/:id", jwtCheck, DELETE_USER);

module.exports = userRouter;
