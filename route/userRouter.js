const express= require("express")
const UserRouter= express.Router()
const {
  userCreator,
  userGeter,
  userGetById,
  UserUpdate,
  userDelete,
  userGetByEmail,
} = require("../controller/userController");
UserRouter.put("/users", UserUpdate)
  .get("/users", userGeter)
  .get("/users", userGetById)
  .post("/users", userCreator)
  .delete("/users", userDelete)
  .get("/users/:email", userGetByEmail);
module.exports=UserRouter  