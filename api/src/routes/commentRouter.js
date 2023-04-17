const { Router } = require("express");
const { validatorCreateComment } = require("../middlewares/validators.js");
const jwtCheck = require("../middlewares/auth.js");
const {
  createCommentHandler,
  getCommentsHandler,
  getCommentsUserHandler,
} = require("../handlers/commentHandlers/commentHandlers.js");

// *Acá definimos las rutas de comment:
const commentRouter = Router();

commentRouter.get("/", getCommentsHandler);

commentRouter.get("/userComments", jwtCheck, getCommentsUserHandler);

commentRouter.post("/", jwtCheck, validatorCreateComment, createCommentHandler);

module.exports = commentRouter;
