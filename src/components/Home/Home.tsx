import { Component } from "solid-js";
import styles from "./styles.module.scss";

const Home: Component<{}> = () => {
  return (
    <div id={styles.Home}>
      <div>
        <a href="/fallguys/settings">
          <span>Settings</span>
        </a>
        <a href="/fallguys/configuration">
          <span>Configuration</span>
        </a>
      </div>
    </div>
  );
};

export default Home;
