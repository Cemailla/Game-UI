/* @refresh reload */
import { render } from "solid-js/web";

import "./assets/fonts/fonts.css";
import "./index.css";
import App from "./components/App/App";

render(() => <App />, document.getElementById("root")!);
