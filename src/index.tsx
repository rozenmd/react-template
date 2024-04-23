import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RootPage } from "./pages/Root";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RootPage />
  </React.StrictMode>
);
