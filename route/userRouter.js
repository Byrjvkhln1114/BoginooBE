const express= require("express")
const UserRouter= express.Router()
const { userMiddleware } = require("../middleware");
const { UserdataChecker } = require("../query/userQuery");
const {
  userCreator,
  userGeter,
  userGetById,
  UserUpdate,
  userDelete,
  userGetByEmail,
  Userlogin,
} = require("../controller/userController");
UserRouter.put("/users", UserUpdate)
  .get("/users", userGeter)
  .get("/users", userGetById)
  .post("/users", userCreator)
  .delete("/users", userDelete)
  .post("/login", UserdataChecker);
module.exports=UserRouter  