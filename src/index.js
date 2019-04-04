import React from "react";
import { render } from "react-dom";
import App from "./components/App.js";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";


render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById("root")
);

