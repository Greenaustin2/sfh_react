import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ReactGA from "react-ga";

const TRACKING_ID = "G-BCDW7FS120 ";
ReactGA.initialize(TRACKING_ID);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
