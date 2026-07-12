import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import linesRouter from "./routes/lines.js";


const app = express();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



app.use(cors());

app.use(express.json());



// API
app.use(
    "/api/lines",
    linesRouter
);



// FRONTEND
app.use(
    express.static(
        path.join(__dirname, "public")
    )
);



app.get("*", (req,res)=>{

    res.sendFile(
        path.join(
            __dirname,
            "public",
            "index.html"
        )
    );

});



const PORT = process.env.PORT || 3000;


app.listen(PORT, ()=>{

    console.log(
        `Crewly running on ${PORT}`
    );

});
