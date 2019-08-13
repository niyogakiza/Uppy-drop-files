import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Menu from "./Menu";

import "../node_modules/uppy/dist/uppy.css";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Uppy with react-hooks</h1>
      <Menu />
    </div>
  );
}

console.clear();

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
