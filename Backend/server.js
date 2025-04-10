import mongoose from "mongoose";
import express from 'express';
import { routes } from "./Routes/job-application.routes.js";
import cors from 'cors';

const databaseName = 'jobTracker';
mongoose.connect(`mongodb+srv://Aman21:Aman21@cluster0.3dyau.mongodb.net/${databaseName}`);


let app=express();
app.use(express.json());
app.use(cors())

let db=mongoose.connection;
db.on('open',()=>{
    console.log(`Connection is Successful`)
  })
  db.on('error',()=>{
    console.log(`Connection isn't successful`)
  })





routes(app);








app.listen(3000,(req,res)=>{
    console.log('server is listening on port 3000');
})