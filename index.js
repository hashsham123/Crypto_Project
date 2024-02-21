// server/server.js
import express from "express";
import apiRouter from "./routers/apiRouter.js";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import cron from "node-cron";
import {fetchDataAndSaveToDB} from "./controller/postDataController.js";
const app = express();
dotenv.config();

const port = process.env.PORT;

connectDB();
// Middleware
app.use(express.json());

// Routes
app.use("/crypto", apiRouter);
cron.schedule("0 * * * *", fetchDataAndSaveToDB);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
