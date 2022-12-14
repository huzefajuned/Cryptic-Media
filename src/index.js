import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./index.css";
import App from "./App";

// State
import ShowsState from "./context/shows/ShowsState";

ReactDOM.render(
  <ShowsState>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ShowsState>,
  document.getElementById("root")
);
