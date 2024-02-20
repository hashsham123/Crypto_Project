const mongoose = require("mongoose");

module.exports = async function connectDB() {
  const { connection } = await mongoose.connect(process.env.MONGO_URI, {
    dbName: "Crypto_Project",
  });
  console.log("mongodb is connected with", connection.host);
};
