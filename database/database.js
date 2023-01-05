const mongoose =require("mongoose")

const connectionString="mongodb+srv://Bayarjavkhlan:Lol999za@cluster0.eu32xua.mongodb.net/Bogino"
exports.connectDatabase= async()=>{
    try{
        await mongoose.connect(connectionString)
        return "mongoose connected"
    }
    catch(error){    
        return error.messsage
    }
}
