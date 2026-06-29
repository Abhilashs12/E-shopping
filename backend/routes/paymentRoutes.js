import express from "express";
import {createPayment} from "../controller/paymentController.js";
import protect from "../middleware/authMiddleware.js"

const router = express.Router();
router.post("/",protect,createPayment);


export default router;