import express from "express";
import { createAddress } from "../controller/addressController";

const router = express.Router();
router.post("/", createAddress);
export default router;
