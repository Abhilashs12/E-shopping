import express from "express";

import {
  createPayment,
  getUserPayments,
} from "../controller/paymentController.js";

const router = express.Router();

router.post("/", createPayment);

router.get("/", getUserPayments);

export default router;
