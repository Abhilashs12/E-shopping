import express from "express";

import {
  createPayment,
  getUserPayments,
  getSinglePayment,
  updatePaymentStatus,
} from "../controller/paymentController.js";

const router = express.Router();

router.post("/", createPayment);

router.get("/", getUserPayments);

router.get("/:id", getSinglePayment);

router.put("/:id", updatePaymentStatus);
export default router;
