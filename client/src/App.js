import React from "react";
import headerLogo from "./images/logos/full_logo.png";
import footerLogo from "./images/logos/sflogo.png";
import BarTreeView from "./components/navMenu";
import ContentRoutes from "./components/contentRoutes";
import "./css/styles.css";

const App = () => {
  return (
    <div className="container">
      <div className="top">
        <a href="/" className="image-link">
          <img className="logo-top" src={headerLogo} alt="Hand Logo" />
        </a>
      </div>
      <div className="center-left">
        <BarTreeView />
      </div>
      <div className="center-right">
        <ContentRoutes />
      </div>
      <div className="bottom">
        <a href="/" className="image-link">
          <img className="logo-bottom" src={footerLogo} alt="Hand Logo" />
        </a>
      </div>
    </div>
  );
};

export default App;
