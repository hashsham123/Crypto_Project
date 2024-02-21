import express from "express";
import {
  fetchDataAndSaveToDB,
  getAllCryptoData,
} from "../controller/postDataController.js";

const router = express.Router();

router.route("/cryptopost").post(fetchDataAndSaveToDB);
router.route("/cryptoget").get(getAllCryptoData);

export default router;
