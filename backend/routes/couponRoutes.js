import express from "express";

import {
  createCoupon,
  getAllCoupons,
  getSingleCoupon,
  updateCoupon,
  deleteCoupon,
  applyCoupon,
} from "../controller/couponController.js";

const router = express.Router();

router.post("/", createCoupon);

router.post("/apply", applyCoupon);

router.get("/", getAllCoupons);

router.get("/:id", getSingleCoupon);

router.put("/:id", updateCoupon);

router.delete("/:id", deleteCoupon);

export default router;
