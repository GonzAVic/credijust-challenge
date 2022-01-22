import React, { useEffect, useState } from "react";
import CJLogo from "../assets/credijusto-logo.svg";

// COMPONENTS
import Text from "../components/Text";

const Header = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("userData")));
  }, []);

  return (
    <div className="header">
      <img src={CJLogo} />
      <Text>{userData && userData.firstName}</Text>
    </div>
  );
};

export default Header;
