import axios from "axios";

export const getCompanies = async (req, res) => {
  try {
    // Extract currency from request body
    const { currency } = req.body;

    // Validate currency
    if (!currency || (currency !== "bitcoin" && currency !== "ethereum")) {
      return res.status(400).json({ error: "Invalid currency" });
    }

    // Fetch data from Coingecko API
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/companies/public_treasury/${currency}`
    );

    // Check if the response contains the list of companies
    if (!response.data || !response.data.companies) {
      return res.status(404).json({ error: "Companies not found" });
    }

    // Extract list of companies from response
    const companies = response.data.companies.map((company) => company.name);

    // Send response with list of companies
    res.status(200).json({ companies });
  } catch (error) {
    console.error("Error fetching company data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
