import express from "express";
import mongoose from "mongoose";
import route from "./route/routes.js";
import cors from "cors";
import bodyParser from "body-parser";

 
const app = express();
const port = 8181;
app.use('/virtual',express.static('public'))
app.use(express.json());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use('/users',route)
const serverAddress = `//localhost:27017`;
const DBName=`studentCURD`
const connectToDB = async () =>{
    try{
        await mongoose.connect(`mongodb:${serverAddress}/${DBName}`);
        console.info(`Connection is Establish At mongodb:${serverAddress}/${DBName} `);

    }catch(e) {
        console.warn(e);
    }
}


connectToDB();

app.listen(port, () => {
    console.log(`on Port ${port}`);

})