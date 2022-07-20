import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import PageIndex from "./PageRoot";
import "./css/index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router basename={"/"}>
      <PageIndex />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
