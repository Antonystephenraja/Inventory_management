import mongoose from "mongoose";

const connectToMongoDB=async()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/inventory_machine");
        console.log("Connected to db")
        
    }
    catch(error){
        console.log("Error while connecting to db",error.message)
    }
};

export default connectToMongoDB;