// models/CryptoCurrency.js
import mongoose from "mongoose";

const cryptoCurrencySchema = new mongoose.Schema({
  id: String,
  symbol: String,
  name: String,
});

const CryptoCurrency = mongoose.model("CryptoCurrency", cryptoCurrencySchema);

export default CryptoCurrency;
