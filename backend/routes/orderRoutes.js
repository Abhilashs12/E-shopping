import express from "express";

import {
  createOrder,
  getUserOrders,
  updateOrderStatus,
  getAllOrders,
} from "../controller/orderController.js";

import protect from "../middleware/authMiddleware.js";
import admin from "../middleware/adminMiddleware.js";

const router = express.Router();
router.post("/", protect, createOrder);
router.get("/", protect, getUserOrders);
router.get("/all/orders", protect, admin, getAllOrders);
router.put("/:id", protect, admin, updateOrderStatus);

export default router;
