import express from "express";

import {
  addToWishlist,
  getWishlist,
  removeFromWishlist,
  clearWishlist,
} from "../controller/wishlistController.js";

const router = express.Router();

router.post("/", addToWishlist);

router.get("/", getWishlist);

router.delete("/:id", removeFromWishlist);

router.delete("/", clearWishlist);

export default router;
