import express from "express";

import {
  addToWishlist,
  getWishlist,
} from "../controller/wishlistController.js";

const router = express.Router();

router.post("/", addToWishlist);

router.get("/", getWishlist);

export default router;
