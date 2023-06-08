import React, { useState, useEffect, useContext } from "react";
import { Route, Routes, Link } from "react-router-dom";
import headerLogo from "./images/logos/full_logo.png";
import footerLogo from "./images/logos/sflogo.png";
import NavMenu from "./components/navMenu";
import Apartamento from "./clients/Apartamento";
import Dior from "./clients/Dior";
import Content from "./components/content";
import "./css/styles.css";
import BarTreeView from "./components/navMenuAlt";

const App = () => {
  const [contentState, setContentState] = useState();
  const handleClick = (data) => {
    setContentState(data);
    console.log("data" + data);
  };
  return (
    <div className="container">
      <div className="top">
        <a href="/" className="image-link">
          <img className="logo-top" src={headerLogo} alt="Hand Logo" />
        </a>
      </div>
      <div className="center-left">
        {/* <NavMenu handleClick={handleClick} /> */}
        <BarTreeView />
      </div>
      <div className="center-right"></div>
      <div className="bottom">
        <a href="/" className="image-link">
          <img className="logo-bottom" src={footerLogo} alt="Hand Logo" />
        </a>
      </div>

      {/* <Routes>
          <Route exact path="/" element={<Splash />} />
          <Route path="/main" element={<Main />} />
          <Route path="/archive" element={<Archive />} />
        </Routes> */}
    </div>
  );
};

export default App;
