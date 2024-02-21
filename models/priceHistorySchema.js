// models/CryptoCurrency.js
import mongoose from "mongoose";

const priceHistorySchema = new mongoose.Schema({
  fromCurrency: {
    type: String,
    required: true,
  },
  toCurrency: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
});

const CurrencyPrice = mongoose.model("priceHistory", priceHistorySchema);

export default CurrencyPrice;
