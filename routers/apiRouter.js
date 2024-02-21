import express from "express";
import {fetchDataAndSaveToDB} from "../controller/postDataController.js";

const router = express.Router();

router.route("/cryptoPost").post(fetchDataAndSaveToDB);
export default router;
