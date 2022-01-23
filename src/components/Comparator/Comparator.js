import React, { useEffect, useState } from "react";

// COMPONENTS
import Layout from "../../layouts/Layout";
import ComparatorTabs from "./ComparatorTabs";
import ComparatorConverter from "./ComparatorConverter";
import CoinTable from "../CoinTable";

const Comparator = ({ coins, coinsConfig, providers }) => {
  const [coinData, setCoinData] = useState({});
  const [currentTab, setCurrentTab] = useState("BTC");

  useEffect(() => {
    setCurrentTab(coins[0]);
  }, []);

  useEffect(() => {
    updateCoinValue();
  }, [currentTab]);

  useEffect(() => {
    const id = setInterval(async () => {
      updateCoinValue();
    }, 5000);

    return () => clearInterval(id);
  }, [coinData, currentTab]);

  const updateCoinValue = async () => {
    const updatesValues = {};
    for (const provider in providers) {
      updatesValues[provider] = extractFromData(
        await fetchCoinData(providers[provider]),
        coinsConfig[currentTab][provider],
        provider
      );
    }
    const _coinData = JSON.parse(JSON.stringify(coinData));
    for (const provider in updatesValues) {
      if (!_coinData[provider]) {
        _coinData[provider] = [];
      }
      _coinData[provider].unshift(updatesValues[provider]);
    }
    setCoinData(_coinData);
  };

  const fetchCoinData = (url) => {
    return fetch(url).then((response) => response.json());
  };

  const extractFromData = (data, path) => {
    let date = new Date();
    const valueInTime = {
      timestamp: date.toLocaleString("en-US"),
      value: `${getProperty(data, path)}`,
    };
    return valueInTime;
  };

  const displayTables = () => {
    return Object.keys(coinData).map((cd) => (
      <CoinTable key={cd} name={cd} history={coinData[cd]} />
    ));
  };

  const changeTab = (newTab) => {
    setCurrentTab(newTab);
    setCoinData({});
  };

  const createCurrentCoinValue = () => {
    const currentCoinValue = {};
    for (const provider in coinData) {
      currentCoinValue[provider] = coinData[provider][0].value;
    }
    return currentCoinValue;
  };

  return (
    <Layout>
      <ComparatorTabs
        coins={coins}
        currentTab={currentTab}
        changeTab={changeTab}
      />
      <div className="comparator-content">{displayTables()}</div>
      <ComparatorConverter currentCoinValue={createCurrentCoinValue()} />
    </Layout>
  );
};

export default Comparator;

// NOTE: I got this from stackOverflow (since I didn't want to add lodash or any other library)
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
