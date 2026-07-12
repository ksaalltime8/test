import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/", async (req, res) => {
    try {

        const response = await axios.get(
            "https://vpn.saudia.com:11011/Apps/FOP/COBS/Lines/GetBidDetails?linesOfTimeId=6493",
            {
                headers: {
                    // You would eventually need the authenticated session cookies here.
                }
            }
        );

        res.json(response.data);

    } catch (err) {
        console.error(err.message);

        res.status(500).json({
            success: false,
            error: err.message
        });
    }
});

export default router;
