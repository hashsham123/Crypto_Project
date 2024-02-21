// server/middlewares/fetchCryptoData.js
import { fetchCryptoData } from "../middlewares/fetchCryptoData.js";
import CryptoModel from "../models/CryptoSchema.js";

export const fetchDataAndSaveToDB = async (req, res, next) => {
  try {
    const cryptoData = await fetchCryptoData();
    for (const crypto of cryptoData) {
      const newCrypto = new CryptoModel({
        name: crypto.name,
        symbol: crypto.symbol,
        // Add other fields as needed from the API response
      });
      await newCrypto.save();
    }
    console.log("Crypto data saved to database successfully");
    next();
  } catch (error) {
    console.error("Error fetching and saving crypto data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
