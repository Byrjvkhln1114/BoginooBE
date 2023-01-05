const express= require("express")
const cors = require("cors")
const UserRouter= require("./route/UserRouter")
const {connectDatabase}=require("./database/database")
const port = 8000;
const app = express();
app.use(express.json())
app.use(cors())
app.use(UserRouter)
const startServer= async()=>{
    await connectDatabase();
    app.listen(port, ()=>{
        console.log((`server on protocol ${port} `));
    })
}
startServer()
