import express from "express";
import example from "../controller.js/apiController.js";

const router = express.Router();

router.route("/example").get(example);
export default router;
