import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import express from "express";

const app = express();
const connectDB = async ()=>{
    try{
        const connectionInstance = mongoose.connect(`${process.env.MONGODB}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection}`)
        // app.on("error",(error)=>{
        //     console.log('ERROR:',error)
        // })
        // app.listen(process.env.PORT,()=>{
        //     console.log(`App is listening on port ${process.env.PORT}`)
        // })
    }catch(error){
        console.log("mongoDB connection failed: ",error)
        // throw error
        process.exit(1)
    }
}

export default connectDB;