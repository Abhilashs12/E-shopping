import express from "express";

import {
  createProduct,
  getProducts,
  getSingleProduct,
  deleteProduct,
  updateProduct,
  getProductByCategory,
  searchProducts,
} from "../controller/productController.js";

import protect from "../middleware/authMiddleware.js";
import admin from "../middleware/adminMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

// Public Routes
router.get("/", getProducts);
router.get("/search/product", searchProducts);
router.get("/category/:category", getProductByCategory);
router.get("/:id", getSingleProduct);

// Admin Routes
router.post("/", protect, admin, upload.single("image"), createProduct);

router.put("/:id", protect, admin, updateProduct);

router.delete("/:id", protect, admin, deleteProduct);

export default router;
