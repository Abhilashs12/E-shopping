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

const router = express.Router();

router.post("/", createProduct);
router.get("/", getProducts);
router.get("/search/product", searchProducts);
router.get("/category/:category", getProductByCategory);
router.get("/:id", getSingleProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
