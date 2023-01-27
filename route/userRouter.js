const express = require("express");
const UserRouter = express.Router();
const { userMiddleware } = require("../middleware");
const {
  UserdataChecker,
  createURL,
  UrlCarrier,
  urlAllDelete,
  UrlHistory,
} = require("../query/userQuery");
const { authorizer } = require("../authorizer/authorization");
const {
  userCreator,
  userGeter,
  userGetById,
  UserUpdate,
  userDelete,
} = require("../controller/userController");
UserRouter.put("/users", UserUpdate)
  .get("/users", userGeter)
  .get("/:shortUrl", UrlCarrier)
  .get("/UrlHistory/:uid", UrlHistory)
  .get("/users", userGetById)
  .post("/users", userCreator)
  .delete("/users", userDelete)
  .delete("/urlAllDelete", urlAllDelete)
  .post("/login", UserdataChecker)
  .post("/bla", createURL);
module.exports = UserRouter;
