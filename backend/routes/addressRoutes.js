import express from "express";

import {
  createAddress,
  getAllAddresses,
  getSingleAddress,
} from "../controller/addressController.js";

const router = express.Router();

router.post("/", createAddress);

router.get("/", getAllAddresses);

router.get("/:id", getSingleAddress);
export default router;
