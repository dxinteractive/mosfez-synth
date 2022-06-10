import React from "react";
import ReactDOM from "react-dom/client";
import "./css/base.css";
import classes from "./demo.module.css";

// import thing from "mosfez-xen-synth";
// import other from "mosfez-xen-synth/other";

import { useWindowSize } from "@react-hook/window-size/throttled";

import { Sidebar } from "./sidebar/sidebar";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

function Main() {
  return (
    <div className={classes.main}>
      <Surface />
      <Sidebar />
    </div>
  );
}

function Surface() {
  // const [width, height] = useWindowSize();
  return <div className={classes.surface}></div>;
}
