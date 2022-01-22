import React from "react";

// COMPONENTS
import Text from "./Text";

const CoinTable = ({ name, history }) => {
  return (
    <div className="coin-table">
      <Text as="h2">123,456</Text>
      <Text as="label">{name}</Text>
      <br />
      <div class="coin-table--history">
        {history &&
          history.map((h) => (
            <div className="coin-table--row">
              <Text>{h.timestamp}</Text>
              <Text>{h.value}</Text>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CoinTable;
