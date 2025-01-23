const { fetchStockData } = require("../utils/polygonClient");

const getStocks = async (req, res) => {
  try {

    const tickersMap = {
      AAPL: "Apple Inc.",
      SPOT: "Spotify Technology",
      MSFT: "Microsoft Corporation",
      TSLA: "Tesla, Inc.",
    };

    const tickers = ["AAPL", "SPOT", "MSFT", "TSLA"];
    const { from = "2023-01-01", to = new Date().toISOString().split("T")[0] } =
      req.query;

    const stockData = await fetchStockData(tickers, from, to);

    const response = stockData.map(({ ticker, data }) => {
      const filteredData = data.filter((entry) => {
        const entryDate = new Date(entry.t);
        const fromDate = new Date(from);
        const toDate = new Date(to);

        return entryDate >= fromDate && entryDate <= toDate;
      });

      const latest = filteredData.length > 0 ? filteredData[filteredData.length - 1] : null;

      if (latest) {
        return {
          ticker,
          name: tickersMap[ticker],
          price: latest.c,
          changePercent: ((latest.c - latest.o) / latest.o) * 100,
        };
      } else {
        return { ticker, name: tickersMap[ticker], price: "No data", changePercent: 0 };
      }
    });

    res.status(200).json(response);
  } catch (error) {
    console.error("Error fetching filtered stocks:", error.message);
    res.status(500).json({ error: "Failed to fetch stock data" });
  }
};

module.exports = {
  getStocks,
};
