import express from "express";

import {
  addReview,
  getProductReviews,
} from "../controller/reviewController.js";

const router = express.Router();

router.post("/", addReview);

router.get("/", getProductReviews);
export default router;
