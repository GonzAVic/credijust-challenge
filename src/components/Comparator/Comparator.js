import React, { useEffect, useState } from "react";

// COMPONENTS
import ComparatorTabs from "./ComparatorTabs";
import ComparatorConverter from "./ComparatorConverter";
import CoinTable from "../CoinTable";

const cryptocompareURL =
  "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP&tsyms=USD";
const stormgainURL = "https://public-api.stormgain.com/api/v1/ticker";

// const providers = ["cryptocompare"];

const Comparator = () => {
  const [coinData, setCoinData] = useState({});
  const [currentTab, setCurrentTab] = useState("BTC");

  useEffect(() => {
    const id = setInterval(async () => {
      const updatesValues = {};
      updatesValues["cryptocompare"] = extractFromData(
        await fetchCoinData(cryptocompareURL),
        true,
        "BTC.USD",
        "cryptocompare"
      );
      updatesValues["stormgain"] = extractFromData(
        await fetchCoinData(stormgainURL),
        true,
        "BTC_USDT.last_price",
        "stormgain"
      );
      const _coinData = JSON.parse(JSON.stringify(coinData));
      for (const provider in updatesValues) {
        if (!_coinData[provider]) {
          _coinData[provider] = [];
        }
        _coinData[provider].push(updatesValues[provider]);
      }
      setCoinData(_coinData);
    }, 5000);

    return () => clearInterval(id);
  }, [coinData]);

  const fetchCoinData = (url) => {
    return fetch(url).then((response) => response.json());
  };

  const extractFromData = (data, isObject, path) => {
    let date = new Date();
    if (isObject) {
      const valueInTime = {
        timestamp: date.toLocaleString("en-US"),
        value: `${getProperty(data, path)}`,
      };
      return valueInTime;
    }
  };

  const displayTables = () => {
    return Object.keys(coinData).map((cd) => (
      <CoinTable name={cd} history={coinData[cd]} />
    ));
  };

  return (
    <div>
      <ComparatorTabs />
      <div className="comparator-content">{displayTables()}</div>
      <ComparatorConverter />
    </div>
  );
};

export default Comparator;

// TODO: Move to utils
function getProperty(obj, prop) {
  var parts = prop.split(".");

  if (Array.isArray(parts)) {
    var last = parts.pop(),
      l = parts.length,
      i = 1,
      current = parts[0];

    while ((obj = obj[current]) && i < l) {
      current = parts[i];
      i++;
    }

    if (obj) {
      return obj[last];
    }
  } else {
    throw "parts is not valid array";
  }
}
