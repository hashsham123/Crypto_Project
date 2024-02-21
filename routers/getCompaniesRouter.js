import express from "express";
import { getCompanies } from "../controller/getCompaniesController.js";

const router = express.Router();

router.route("/getcompanies").post(getCompanies);

export default router;
