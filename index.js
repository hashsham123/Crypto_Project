// server/server.js
const express = require("express");
const apiRouter = require("./routers/apiRouter.js");
require("dotenv").config();
const connectDB = require("./config/database.js");
const app = express();
const port = process.env.PORT;

connectDB();
// Middleware
app.use(express.json());

// Routes
app.use("/crypto", apiRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
