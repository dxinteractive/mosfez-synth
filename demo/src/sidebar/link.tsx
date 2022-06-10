import classes from "./link.module.css";

import { memo } from "react";
import { Clickable } from "./clickable";
import type { ClickableProps } from "./clickable";

export const Link = memo(function Link(props: ClickableProps) {
  return <Clickable {...props} className={classes.link} />;
});
