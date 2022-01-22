import React from "react";

const coins = ["BTC", "ETH", "XRP"];

const ComparatorTabs = () => {
  return (
    <div className="comparator-tabs">
      {coins.map((c) => (
        <div className="comparator-tabs--tab">{c}</div>
      ))}
    </div>
  );
};

export default ComparatorTabs;
