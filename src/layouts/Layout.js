import React from "react";

// COMPONENTS
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div data-tid="layout-base">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
