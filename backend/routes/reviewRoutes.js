import express from "express";

import {
  addReview,
  getProductReviews,
  updateReview,
  deleteReview,
} from "../controller/reviewController.js";

const router = express.Router();

router.post("/", addReview);

router.get("/:productId", getProductReviews);

router.put("/:id", updateReview);

router.delete("/:id", deleteReview);

export default router;
