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

  UserUpdate,
  userDelete,
} = require("../controller/userController");
UserRouter.put("/users", UserUpdate)
  .get("/allusers", userGeter)
  .get("/UrlHistory/:uid", UrlHistory)
  .post("/users", userCreator)
  .delete("/users", userDelete)
  .delete("/urlAllDelete", urlAllDelete)
  .post("/login", UserdataChecker)
  .post("/bla", createURL)
  .get("/:shortUrl", UrlCarrier);
module.exports = UserRouter;
