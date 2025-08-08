import express from "express";
import {createServer} from "node:http";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./src/routes/userRoutes.js";

const app = express();
const server = createServer(app);

mongoose.connect("mongodb://localhost:27017/bookmate")
.then(()=>{
    console.log("MongoDB Connected Successfully!");
})
.catch((err)=>{
    console.log("MongoDB connection failed :", err);
});

const port = 8000;
app.set(port);

app.use("/", userRoutes);
app.listen(port, ()=>{
    console.log("listening to port 8000");
});