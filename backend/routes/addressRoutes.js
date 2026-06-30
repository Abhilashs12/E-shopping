import express from "express";

import {
  createAddress,
  getAllAddresses,
  getSingleAddress,
  updateAddress,
  deleteAddress,
  setDefaultAddress,
} from "../controller/addressController.js";

const router = express.Router();
router.post("/", createAddress);

router.get("/", getAllAddresses);

router.put("/:id/default", setDefaultAddress);

router.get("/:id", getSingleAddress);

router.put("/:id", updateAddress);

router.delete("/:id", deleteAddress);

export default router;
