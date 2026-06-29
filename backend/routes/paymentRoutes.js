import express from "express";

import {
  createPayment,
  getUserPayments,
  getSinglePayment,
} from "../controller/paymentController.js";

const router = express.Router();

router.post("/", createPayment);

router.get("/", getUserPayments);

router.get("/:id", getSinglePayment);
export default router;
