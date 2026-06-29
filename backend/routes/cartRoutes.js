import express from "express";

import {
    addToCart,
    getCartItems,
    removeCartItem,
} from "../controller/cartController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, addToCart);

router.get("/", protect, getCartItems);

router.delete("/:id", protect, removeCartItem);

export default router;