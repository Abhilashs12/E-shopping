import express from "express";

import {
  addReview,
  getProductReviews,
  updateReview,
} from "../controller/reviewController.js";

const router = express.Router();

router.post("/", addReview);

router.get("/:productId", getProductReviews);

router.put("/:id", updateReview);
export default router;
