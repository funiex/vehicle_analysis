import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
// Application Structure
// APP
  // dashboard
  // data analyser
    // graph view
    // tables view
  // Sales Forecast
root.render(
  //Redux-Toolkit Provider
  // Redux-Toolkit Docs: https://redux-toolkit.js.org/introduction/getting-started
  <Provider store={store}>
    {/* 
    using React Router Dom V6 for managing routes
    React Router Dom V6 DOCs: https://reactrouter.com/docs/en/v6/getting-started/overview
    */}
    <BrowserRouter>
      <Routes>
        {/* For all routes, APP component will be rendered. */}
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
