import express from "express";

import { createCoupon } from "../controller/couponController";

const router = express.Router();

router.post("/", createCoupon);
export default router;
