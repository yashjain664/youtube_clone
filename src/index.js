// require('dotenv').config()
import dotenv from "dotenv"
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";
import express from "express"

const app = express()

dotenv.config({
    path: './env'
})
connectDB()
.then(()=>{
    app.on("error",(err)=>{
        console.log("error occured on connect",err)
        throw(err)
    })
    app.listen(process.env.PORT || 8000, () => {
        console.log(`server is running on port ${process.env.PORT}`)
    })
})
.catch((err)=> {
    console.log('mongoDB connection failed')
})


/*
import  express  from "express";

const app = express();
(async()=>{
    try{
       await mongoose.connect(`${process.env.MONGODB}/${DB_NAME}`)
       app.on("error",(error)=>{
        console.log("ERROR:", error);
        throw error
       })
       app.listen(process.env.PORT, ()=>{
        console.log(`app is listening on port: ${process.env.PORT}`)
       })
    }catch(error){
        console.error("ERROR:",error)
        throw error
    }
})() 
*/