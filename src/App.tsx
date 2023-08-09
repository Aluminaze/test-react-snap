import React from "react";
import "./App.css";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { About } from "./components/About";
import { Main } from "./components/Main";
import { Blog } from "./components/Blog";

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
          <Main />
        </Route>
        <Route path={"/about"} exact>
          <About />
        </Route>
        <Route path={"/blog"} exact>
          <Blog />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
