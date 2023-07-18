import React from "react";
import headerLogo from "./images/logos/full_logo.png";
import footerLogo from "./images/logos/sflogo.png";
import BarTreeView from "./components/navMenu";
import ContentRoutes from "./components/contentRoutes";
import s from "./css/global.module.css";

const App = () => {
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
        <ContentRoutes />
      </div>
      <div className={s.bottom}>
        <a href="/" className={s.imageLink}>
          <img className={s.logoBottom} src={footerLogo} alt="Hand Logo" />
        </a>
      </div>
    </div>
  );
};

export default App;
