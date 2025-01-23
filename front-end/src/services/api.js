import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/stocks"; 

export const fetchStockData = async (tickers = ["AAPL", "SPOT", "MSFT", "TSLA"], from, to) => {
  try {
    const params = {
      tickers: tickers.join(","),
      from: from || "2023-01-01",
      to: to || new Date().toISOString().split("T")[0],
    };

    const response = await axios.get(`${API_BASE_URL}`, { params });
    return response.data; 
  } catch (error) {
    console.error("Error fetching stock data:", error.message);
    throw new Error("Failed to fetch stock data");
  }
};