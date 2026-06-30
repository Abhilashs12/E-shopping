import express from "express";

import {
  addToWishlist,
  getWishlist,
  removeFromWishlist,
} from "../controller/wishlistController.js";

const router = express.Router();

router.post("/", addToWishlist);

router.get("/", getWishlist);

router.delete("/:id", removeFromWishlist);

export default router;
