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



// API ROUTE
app.use(
    "/api/lines",
    linesRouter
);



// WEBSITE FILES

app.use(
    express.static(
        path.join(__dirname,"public")
    )
);



app.get("/", (req,res)=>{

    res.sendFile(
        path.join(
            __dirname,
            "public",
            "index.html"
        )
    );

});





app.listen(3000,()=>{

console.log(
"Crewly server running"
);

});
