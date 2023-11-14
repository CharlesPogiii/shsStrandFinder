import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./css/fontawesome.css";
import "./css/style.css";

/*
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
*/

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

// DEVELOPMENT
const renderApp = () => {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
};

/*
if (process.env.NODE_ENV == "development") {
  renderApp();
} else {
  // PRODUCTION
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}
*/

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
