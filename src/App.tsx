import React from "react";
import "./App.css";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <header>
        <ul
          style={{
            display: "inline-flex",
            gap: 20,
            justifyContent: "center",
            width: "100%",
          }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </header>

      <Switch>
        <Route path={"/"} exact>
          <h1>Main</h1>
        </Route>
        <Route path={"/about"} exact>
          <h1>About</h1>
        </Route>
        <Route path={"/blog"} exact>
          <h1>Blog</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
