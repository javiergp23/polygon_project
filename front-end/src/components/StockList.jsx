import { useEffect, useState } from "react";
import { fetchStockData } from "../services/api";
import "./stockList.css";
import Loader from "./Loader";

const img = [
  { ticker: "AAPL", src: "/apple.png" },
  { ticker: "SPOT", src: "/spotify.png" },
  { ticker: "MSFT", src: "/microsoft.png" },
  { ticker: "TSLA", src: "/tesla.png" },
];

const StockList = () => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await fetchStockData();
        setStocks(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) return <Loader />;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="watchlist-title-container">
        <h2>Watchlist</h2>
        <button className="button-watchlist">
          All
          <span className="material-symbols-outlined arrow-right">
            arrow_right_alt
          </span>
        </button>
      </div>
      <div>
        <div>
          {stocks.map((stock) => {
            const stockImage = img.find(
              (image) => image.ticker === stock.ticker
            );
            const isPositive = stock.changePercent > 0;
            return (
              <div className="container-stosks" key={stock.name}>
                <div className="container-stosk-names">
                  {stockImage && (
                    <div>
                      <img
                        className="watchlist-logo"
                        src={stockImage.src}
                        alt={stock.name}
                      />
                    </div>
                  )}
                  <div>
                    <p className="stock-name">{stock.ticker}</p>
                    <p className="stock-name-description">{stock.name}</p>
                  </div>
                </div>
                <div className="stock-price-container">
                  <p className="price">${stock.price}</p>
                  <p
                    className={`price ${
                      isPositive ? "price-positive" : "price-negative"
                    }`}
                  >
                    {isPositive ? (
                      <>
                        <span className="material-symbols-outlined arrow-up">
                          trending_up
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="material-symbols-outlined arrow-down">
                          trending_down
                        </span>
                      </>
                    )}
                    {stock.changePercent.toFixed(2)}%
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default StockList;
