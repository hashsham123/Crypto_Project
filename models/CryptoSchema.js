// models/CryptoCurrency.js
import mongoose from "mongoose";

const cryptoCurrencySchema = new mongoose.Schema({
  id: String,
  crypto_id: String,
  name: String,
});

const CryptoCurrency = mongoose.model("CryptoCurrency", cryptoCurrencySchema);

export default CryptoCurrency;
