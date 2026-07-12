import express from "express";

const router = express.Router();


router.get("/", async (req,res)=>{


    const lines = [

        {
            lineNo:"2401",
            aircraft:"B787",
            route:"JED-GVA",
            block:"54:35",
            credit:"62:10",
            layover:"48H"
        },


        {
            lineNo:"2402",
            aircraft:"B777",
            route:"JED-LHR",
            block:"62:10",
            credit:"70:20",
            layover:"72H"
        },


        {
            lineNo:"2403",
            aircraft:"A320",
            route:"RUH-DXB",
            block:"35:20",
            credit:"40:00",
            layover:"24H"
        }

    ];


    res.json({

        success:true,

        lines:lines

    });


});


export default router;