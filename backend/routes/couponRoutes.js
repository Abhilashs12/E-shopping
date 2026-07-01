import express from "express";

import { createCoupon, getAllCoupons } from "../controller/couponController.js";

const router = express.Router();

router.post("/", createCoupon);

router.get("/", getAllCoupons);

export default router;
