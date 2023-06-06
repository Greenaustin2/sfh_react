import React, { useState, useEffect, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import headerLogo from "./images/logos/full_logo.png";
import footerLogo from "./images/logos/sflogo.png";
import NavMenu from "./components/navMenu";
// import "./css/styles.css";

const App = () => {
  return (
    <div className="container">
      <div className="top">
        <a href="/" className="image-link">
          <img className="logo-top" src={headerLogo} alt="Hand Logo" />
        </a>
      </div>
      <div className="center-left">
        <NavMenu />
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
