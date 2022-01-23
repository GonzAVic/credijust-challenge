import React from "react";

// COMPONENTS
import Text from "./Text";

const CoinTable = ({ name, history }) => {
  const displayArrow = (isUp) => {
    return isUp ? "⇧" : "⇩";
  };

  return (
    <div data-tid={`coin-table-${name}`} className="coin-table">
      <Text as="h2">
        {history[0] &&
          history[1] &&
          displayArrow(history[0].value > history[1].value)}
        {history[0].value}
      </Text>
      <Text as="label">{name}</Text>
      <br />
      <div className="coin-table--history">
        {history &&
          history.map((h) => (
            <div key={h.timestamp} className="coin-table--row">
              <Text>{h.timestamp}</Text>
              <Text>{h.value}</Text>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CoinTable;
