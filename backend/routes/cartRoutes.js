import express from "express";

import {
  addToCart,
  getCartItems,
  removeCartItem,
} from "../controller/cartController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", addToCart);

router.get("/", getCartItems);

router.delete("/:id", removeCartItem);

export default router;
