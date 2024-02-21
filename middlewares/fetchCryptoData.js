import axios from "axios";

export const fetchCryptoData = async () => {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/list"
    );
    return response.data; // Return the array of crypto data
  } catch (error) {
    console.error("Error fetching crypto data:", error);
    throw new Error("Error fetching crypto data");
  }
};
