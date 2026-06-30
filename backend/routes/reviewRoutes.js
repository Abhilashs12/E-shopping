import express from "express";

import { addReview } from "../controller/reviewController.js";

const router = express.Router();

router.post("/", addReview);

export default router;
