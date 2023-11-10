import React, { useState, useEffect } from "react";
import headerLogo from "./images/logos/full_logo.png";
import footerLogo from "./images/logos/sflogo.png";
import BarTreeView from "./components/navMenu";
import ContentRoutes from "./components/contentRoutes";
import s from "./css/global.module.css";

import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

// import RouteChangeTracker from "./components/routeChangeTracker";

// import ReactGA from "react-ga";
// const TRACKING_ID = "G-BCDW7FS120 "; // OUR_TRACKING_ID
// ReactGA.initialize(TRACKING_ID);

const App = () => {
  const [toggle, setToggle] = useState(false);
  const toggleLightbox = () => setToggle(!toggle);

  const location = useLocation();
  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  return (
    <div className={s.container}>
      <div className={s.top}>
        <a href="/" className={s.imageLink}>
          <img className={s.logoTop} src={headerLogo} alt="Hand Logo" />
        </a>
      </div>
      <div className={s.centerLeft}>
        <BarTreeView />
      </div>
      <div className={s.centerRight}>
        <ContentRoutes toggle={toggle} toggleLightbox={toggleLightbox} />
      </div>
      <div className={s.bottom}>
        <a href="/" className={s.imageLink}>
          <img className={s.logoBottom} src={footerLogo} alt="Hand Logo" />
        </a>
      </div>
      {/* <RouteChangeTracker /> */}
    </div>
  );
};

export default App;
