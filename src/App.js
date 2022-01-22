import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// SCREENS
import Login from "./components/Login";
import Comparator from "./components/Comparator/Comparator";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route
          exact
          path="/comparator"
          element={
            <Comparator
              coins={["BTC", "ETH", "XRP"]}
              coinsConfig={{
                BTC: {
                  cryptocompare: "BTC.USD",
                  stormgain: "BTC_USDT.last_price",
                  coingecko: "0.current_price",
                },
                ETH: {
                  cryptocompare: "ETH.USD",
                  stormgain: "ETH_USDT.last_price",
                  coingecko: "1.current_price",
                },
                XRP: {
                  cryptocompare: "XRP.USD",
                  stormgain: "XRP_USDT.last_price",
                  coingecko: "2.current_price",
                },
              }}
              providers={{
                cryptocompare:
                  "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP&tsyms=USD",
                stormgain: "https://public-api.stormgain.com/api/v1/ticker",
                coingecko:
                  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,%20ripple",
              }}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
