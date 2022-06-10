import type { Dendriform } from "dendriform";
import classes from "./drawer.module.css";

import { Clickable } from "./clickable";

export type DrawerProps = {
  label: React.ReactNode;
  state: Dendriform<boolean>;
  children: React.ReactNode;
};

export function Drawer(props: DrawerProps) {
  const { state } = props;
  const open = state.useValue();

  const handleClick = () => {
    state.set((value) => !value);
  };

  return (
    <div>
      <Clickable onClick={handleClick} className={classes.label}>
        {props.label}
      </Clickable>
      {open ? <div className={classes.contents}>{props.children}</div> : null}
    </div>
  );
}
