import React from "react";

// COMPONENTS
import Text from "./Text";

const CoinTable = ({ name, history }) => {
  return (
    <div data-tid={`coin-table-${name}`} className="coin-table">
      <Text as="h2">123,456</Text>
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
