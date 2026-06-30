import express from "express";

import {
  createAddress,
  getAllAddresses,
  getSingleAddress,
  updateAddress,
  deleteAddress,
} from "../controller/addressController.js";

const router = express.Router();

router.post("/", createAddress);

router.get("/", getAllAddresses);

router.get("/:id", getSingleAddress);

router.put("/:id", updateAddress);

router.delete("/:id", deleteAddress);
export default router;
