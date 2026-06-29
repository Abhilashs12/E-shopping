import express from "express";

import {
    createOrder,
    getUserOrders,
    updateOrderStatus,
    getAllOrders,
} from "../controller/orderController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createOrder);

router.get("/all/orders", protect, getAllOrders);

router.get("/", protect, getUserOrders);

router.put("/:id", protect, updateOrderStatus);

export default router;