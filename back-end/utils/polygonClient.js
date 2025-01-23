const { restClient } = require("@polygon.io/client-js");
const rest = restClient( process.env.POLYGON_API_KEY, "https://api.polygon.io");

let cachedData = null;
let lastFetchTime = null;
const CACHE_DURATION = 60 * 1000;

const fetchStockData = async (tickers, from, to) => {
  const now = Date.now();

  if (cachedData && lastFetchTime && now - lastFetchTime < CACHE_DURATION) {
    console.log("Returning cached data");
    return cachedData;
  }

  try {
    const results = await Promise.all(
      tickers.map(async (ticker) => {
        const data = await rest.stocks.aggregates(ticker, 1, "day", from, to);
        return { ticker, data: data.results || [] };
      })
    );
    cachedData = results;
    lastFetchTime = now;

    console.log("Fetched stock data");
    return results;
  } catch (error) {
    console.error("Error fetching stock data:", error);
    throw error;
  }
};

module.exports = { fetchStockData };
