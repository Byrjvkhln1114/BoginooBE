const express= require("express")
const UserRouter= express.Router()
const { userMiddleware } = require("../middleware");
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
  .get("/users", userMiddleware, userGeter)
  .get("/users", userGetById)
  .post("/users", userCreator)
  .delete("/users", userDelete)
  .get("/users/:email", userGetByEmail)
  .post("/login", Userlogin);
module.exports=UserRouter  