import { Component } from "solid-js";
import styles from "./styles.module.scss";

import computer from "../../assets/images/FallGuys/computer.png";
import conversation from "../../assets/images/FallGuys/conversation.png";
import game from "../../assets/images/FallGuys/game-controller.png";
import info from "../../assets/images/FallGuys/info.png";
import face from "../../assets/images/FallGuys/no-mouth.png";
import menu from "../../assets/images/FallGuys/side-menu.png";
import volume from "../../assets/images/FallGuys/volume.png";

const FallGuys: Component<{}> = () => {
  return (
    <div id={styles.FallGuys}>
      <div class={styles.row}>
        <button>
          <header>
            <p>AUDIO</p>
            <span />
          </header>
          <img src={volume} />
        </button>
        <button>
          <header>
            <p>OPTIONS</p>
            <span />
          </header>
          <img src={computer} />
        </button>
        <button>
          <header>
            <p>WIRELESS CONTROLLER</p>
            <span />
          </header>
          <img src={game} />
        </button>
      </div>
      <div class={styles.row}>
        <button>
          <header>
            <p>PROFILE</p>
            <span />
          </header>
          <img src={face} />
        </button>
        <button>
          <header>
            <p>HOW TO PLAY</p>
            <span />
          </header>
          <img src={info} />
        </button>
        <button>
          <header>
            <p>SUPPORT</p>
            <span />
          </header>
          <img src={conversation} />
        </button>
        <button>
          <header>
            <p>CREDITS</p>
            <span />
          </header>
          <img src={menu} />
        </button>
      </div>
    </div>
  );
};

export default FallGuys;
