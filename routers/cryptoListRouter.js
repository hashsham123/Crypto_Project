import express from "express";
import {
  fetchDataAndSaveToDB,
  getAllCryptoData,
} from "../controller/postDataController.js";

const router = express.Router();

router.route("/cryptoPost").post(fetchDataAndSaveToDB);
router.route("/cryptoGet").get(getAllCryptoData);

export default router;
