import { Component, JSX } from "solid-js";
import styles from "./styles.module.scss";

const FallGuysWrapper: Component<{ children?: JSX.Element }> = (props) => {
  return (
    <>
      <nav id={styles.NavBar}>
        <a href="/fallguys/settings">
          <span>Settings</span>
        </a>
        <a href="/fallguys/configuration">
          <span>Configuration</span>
        </a>
      </nav>
      {props.children}
    </>
  );
};

export default FallGuysWrapper;
