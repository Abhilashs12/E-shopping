import express from "express";

import {
  createAddress,
  getAllAddresses,
} from "../controller/addressController.js";

const router = express.Router();

router.post("/", createAddress);

router.get("/", getAllAddresses);

export default router;
