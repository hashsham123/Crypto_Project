export const getPrice = async (req, res) => {
  try {
    const { fromCurrency, toCurrency, date } = req.body;

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

    res.status(200).json({ price });
  } catch (error) {
    console.error("Error fetching price data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
