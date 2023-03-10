const express = require("express");
const cors = require("cors");
const UserRouter = require("./route/userRouter");
const { connectDatabase } = require("./database/database");
const port = 8000;
const app = express();
app.use(express.json());
app.use(cors());
app.use(UserRouter);
app.get("/", (req, res) => {
  res.send("hellodog");
});
const startServer = async () => {
  await connectDatabase();
  app.listen(port, () => {
    console.log(`server on protosscol ${port} `);
  });
};
startServer();
