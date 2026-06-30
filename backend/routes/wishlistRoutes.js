import express from "express";
import { addToWishlist } from "../controller/wishlistController.js";

const router = express.Router();

router.post("/", addToWishlist);

export default router;
