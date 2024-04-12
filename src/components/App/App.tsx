import { Component } from "solid-js";

import styles from "./styles.module.scss";
import FallGuys from "../FallGuys/FallGuys";
import FallGuys2 from "../FallGuys2/FallGuys2";
import { HashRouter, Route } from "@solidjs/router";
import Home from "../Home/Home";
import FallGuysWrapper from "../FallGuysWrapper/FallGuysWrapper";

const App: Component = () => {
  return (
    <HashRouter>
      {/* <FallGuys/> */}

      <Route path="/" component={Home} />
      <Route path="/fallguys" component={FallGuysWrapper}>
        <Route path="/" component={FallGuys} />
        <Route path="/settings" component={FallGuys} />
        <Route path="/configuration" component={FallGuys2} />
      </Route>
    </HashRouter>
  );
};

export default App;
