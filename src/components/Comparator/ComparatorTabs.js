import React from "react";

const coins = ["BTC", "ETH", "XRP"];

const ComparatorTabs = ({ currentTab, changeTab }) => {
  return (
    <div className="comparator-tabs">
      {coins.map((c) => (
        <div
          key={c}
          className={`comparator-tabs--tab ${currentTab === c && "active"}`}
          onClick={() => changeTab(c)}
        >
          {c}
        </div>
      ))}
    </div>
  );
};

export default ComparatorTabs;
