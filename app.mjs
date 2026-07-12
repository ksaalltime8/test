import express from "express";
import cors from "cors";
import linesRouter from "./routes/lines.js";


const app = express();


app.use(cors());

app.use(express.json());


app.use("/api/lines", linesRouter);


app.listen(3000, ()=>{

console.log("Backend running on port 3000");

});