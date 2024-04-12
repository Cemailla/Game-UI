import { Component } from "solid-js";
import styles from "./styles.module.scss";

import fallguys from "../../assets/images/FallGuys/fallguys.png";
import hanger from "../../assets/images/FallGuys/hanger.png";
import interfaces from "../../assets/images/FallGuys/interface.png";

const FallGuys2: Component<{}> = () => {
  return (
    <div id={styles.FallGuys}>
      <button>
        <header>
          <p>OUTFITS</p>
          <span />
        </header>
        <img src={hanger} />
      </button>
      <button>
        <header>
          <p>THEATRICS</p>
          <span />
        </header>
        <img src={fallguys} />
      </button>
      <button>
        <header>
          <p>INTERFACE</p>
          <span />
        </header>
        <img src={interfaces} />
      </button>
    </div>
  );
};

export default FallGuys2;
