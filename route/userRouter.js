const express = require("express");
const UserRouter = express.Router();
const { userMiddleware } = require("../middleware");
const { UserdataChecker, createURL } = require("../query/userQuery");
const {
  userCreator,
  userGeter,
  userGetById,
  UserUpdate,
  userDelete,
} = require("../controller/userController");
UserRouter.put("/users", UserUpdate)
  .get("/users", userGeter)
  .get("/users", userGetById)
  .post("/users", userCreator)
  .delete("/users", userDelete)
  .post("/login", UserdataChecker)
  .post("/bla", createURL);
module.exports = UserRouter;
