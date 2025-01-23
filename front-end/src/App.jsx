import { useState } from "react";
import { ReactSVG } from "react-svg";
import StockList from "./components/StockList";
import "./App.css";

function App() {
  const [showFunds, setShowFunds] = useState(true);
  const [activeLink, setActiveLink] = useState(null);
  const handleLinkClick = (linkName) => {
    setActiveLink(linkName); // Actualizar el enlace activo
  };

  const toggleFundsVisibility = () => {
    setShowFunds(!showFunds);
  };

  return (
    <>
      <div className="container">
        <div className="container-app">
          <header className="header">
            <p className="title">TOTAL INVESTING</p>
            <div className="funds-container">
              <h2 className="funds">
                {showFunds ? "$12,535.00" : "$*********"}
              </h2>
              <span
                className="material-symbols-outlined"
                onClick={toggleFundsVisibility}
                style={{ cursor: "pointer" }}
              >
                {showFunds ? "visibility" : "visibility_off"}
              </span>
            </div>
            <div className="porcent-container">
              <span className="material-symbols-outlined trending-up">
                trending_up
              </span>
              <p className="porcent-funds">+$32 (0.48%) </p>
              <span className="material-symbols-outlined icon-info">help</span>
            </div>
            <div className="buying-continer">
              <div className="buying-container_title">
                <div className="buying-container_title-1">
                  <p className="title-buying">BUYING POWER</p>
                  <span className="material-symbols-outlined icon-info">
                    help
                  </span>
                </div>
                <div>
                  <p className="title-buying-power">$840.50</p>
                </div>
              </div>
              <button>
                <span className="space">+</span> Deposit
              </button>
            </div>
          </header>
          <main className="main">
            <StockList />
          </main>
          <footer className="footer">
            <nav className="nav-footer">
              <a
                className={`link-footer ${
                  activeLink === "home" ? "active" : ""
                }`}
                href="#"
                onClick={() => handleLinkClick("home")}
              >
                <ReactSVG
                  className={`icon-nav ${
                    activeLink === "home" ? "active" : ""
                  }`}
                  src="/bxs-home-alt-2.svg"
                  alt=""
                />
                Home
              </a>
              <a
                className={`link-footer ${
                  activeLink === "markets" ? "active" : ""
                }`}
                href="#"
                onClick={() => handleLinkClick("markets")}
              >
                <ReactSVG
                  className={`icon-nav ${
                    activeLink === "markets" ? "active" : ""
                  }`}
                  src="/bx-grid-alt.svg"
                  alt=""
                />
                Markets
              </a>
              <a className="link-footer" href="">
                <ReactSVG
                  className="icon-nav transfer-icon"
                  src="/bx-transfer.svg"
                  alt=""
                />
              </a>
              <a
                className={`link-footer ${
                  activeLink === "portfolio" ? "active" : ""
                }`}
                href="#"
                onClick={() => handleLinkClick("portfolio")}
              >
                <ReactSVG
                  className={`icon-nav ${
                    activeLink === "portfolio" ? "active" : ""
                  }`}
                  src="/bx-wallet.svg"
                  alt=""
                />
                Portfolio
              </a>
              <a
                className={`link-footer ${
                  activeLink === "more" ? "active" : ""
                }`}
                href=""
                onClick={() => handleLinkClick("more")}
              >
                <ReactSVG
                  className={`icon-nav ${
                    activeLink === "more" ? "active" : ""
                  }`}
                  src="/bx-dots-horizontal-rounded.svg"
                  alt=""
                />
                More
              </a>
            </nav>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
