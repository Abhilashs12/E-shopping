import express from "express";

import {
  createCoupon,
  getAllCoupons,
  getSingleCoupon,
} from "../controller/couponController.js";

const router = express.Router();

router.post("/", createCoupon);

router.get("/", getAllCoupons);

router.get("/:id", getSingleCoupon);

export default router;
