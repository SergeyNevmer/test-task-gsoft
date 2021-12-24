import React from "react";
import ReactDOM from "react-dom";
import "./styles/normalize.css";
import { BrowserRouter } from "react-router-dom";
import { App } from "./components/App/App";
import { Provider } from "react-redux";
import { store } from "./redux/store";

// import "./test.css";

const root = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  root
);
