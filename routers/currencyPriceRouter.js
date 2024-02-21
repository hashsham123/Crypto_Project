import express from "express";
import { getPrice } from "../controller/currencyPriceController.js";

const router = express.Router();

router.route("/getprice").post(getPrice);

export default router;
