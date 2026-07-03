import express from "express";

import {
  createCoupon,
  getAllCoupons,
  getSingleCoupon,
  updateCoupon,
  applyCoupon,
} from "../controller/couponController.js";

import protect from "../middleware/authMiddleware.js";
import admin from "../middleware/adminMiddleware.js";

const router = express.Router();

router.post("/apply", protect, applyCoupon);
router.post("/", protect, admin, createCoupon);
router.get("/", protect, admin, getAllCoupons);
router.get("/:id", protect, admin, getSingleCoupon);
router.put("/:id", protect, admin, updateCoupon);

export default router;
