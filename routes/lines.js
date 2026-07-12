import express from "express";

const router = express.Router();


router.get("/", (req,res)=>{

    res.json({

        success:true,

        lines:[
            {
                lineNo:"2401",
                aircraft:"B787",
                route:"JED-GVA",
                block:"54:35",
                credit:"62:10",
                layover:"48H"
            }
        ]

    });

});


export default router;
