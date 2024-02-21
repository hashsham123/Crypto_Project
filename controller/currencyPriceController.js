import axios from "axios";
import CurrencyPrice from "../models/priceHistorySchema.js";

export const getPrice = async (req, res) => {
  try {
    // Validate request body
    const { fromCurrency, toCurrency, date } = req.body;
    if (!fromCurrency || !toCurrency || !date) {
      return res.status(400).json({ error: "Invalid request body" });
    }

    // Fetch historical price data for fromCurrency
    const fromCurrencyData = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${fromCurrency}/history?date=${date}&localization=false`
    );
    const fromCurrencyPrice =
      fromCurrencyData.data.market_data.current_price.usd;

    // Fetch historical price data for toCurrency
    const toCurrencyData = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${toCurrency}/history?date=${date}&localization=false`
    );
    const toCurrencyPrice = toCurrencyData.data.market_data.current_price.usd;

    // Calculate the price of fromCurrency in terms of toCurrency
    const price = fromCurrencyPrice / toCurrencyPrice;

    // Create a new document using the CurrencyPrice schema
    const newPriceData = new CurrencyPrice({
      fromCurrency,
      toCurrency,
      date,
      price,
    });

    // Save the new document to the database
    await newPriceData.save();

    res.status(200).json({ price });
  } catch (error) {
    console.error("Error fetching price data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getHistory = async (req, res) => {
  try {
    // Fetch all data from the CryptoSchema
    const history = await CurrencyPrice.find();
    res.status(200).json(history);
  } catch (error) {
    console.error("Error fetching crypto data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
