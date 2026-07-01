import express from "express";

import {
  createCoupon,
  getAllCoupons,
  getSingleCoupon,
  updateCoupon,
} from "../controller/couponController.js";

const router = express.Router();

router.post("/", createCoupon);

router.get("/", getAllCoupons);

router.get("/:id", getSingleCoupon);

router.put("/:id", updateCoupon);

export default router;
