import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Blog from "./components/Blog";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Switch>
          <Route path="/blog" render={(props) => <Blog {...props} />} />
          <Route path="/" render={(props) => <App {...props} />} />
        </Switch>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
