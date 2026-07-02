import express from "express";

import {
  createOrder,
  getUserOrders,
  updateOrderStatus,
  getAllOrders,
} from "../controller/orderController.js";

const router = express.Router();

router.post("/", createOrder);

router.get("/all/orders", getAllOrders);

router.get("/", getUserOrders);

router.put("/:id", updateOrderStatus);

export default router;
