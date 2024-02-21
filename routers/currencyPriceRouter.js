import express from "express";
import { getPrice, getHistory } from "../controller/currencyPriceController.js";

const router = express.Router();

router.route("/getprice").post(getPrice);
router.route("/getpricehistory").get(getHistory);

export default router;
