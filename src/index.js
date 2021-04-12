import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import PokeState from "./context/context";
import { BrowserRouter } from "react-router-dom";
import { Grommet } from "grommet";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Grommet>
        <PokeState>
          <App />
        </PokeState>
      </Grommet>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
