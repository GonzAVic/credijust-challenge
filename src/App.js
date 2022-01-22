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
              coins={["BTC", "ETH"]}
              coinsConfig={{
                BTC: {
                  cryptocompare: "BTC.USD",
                  stormgain: "BTC_USDT.last_price",
                },
                ETH: {
                  cryptocompare: "ETH.USD",
                  stormgain: "ETH_USDT.last_price",
                },
              }}
              providers={{
                cryptocompare:
                  "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP&tsyms=USD",
                stormgain: "https://public-api.stormgain.com/api/v1/ticker",
              }}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
