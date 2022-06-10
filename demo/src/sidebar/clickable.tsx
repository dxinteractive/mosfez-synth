import classes from "./clickable.module.css";

import type React from "react";
import { memo, useRef } from "react";
import clsx from "clsx";

export type ClickableProps = {
  onClick?: () => void;
  href?: string;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
};

export const Clickable = memo(function Clickable(props: ClickableProps) {
  const { children, onClick, href, style } = props;

  const ref = useRef<HTMLAnchorElement>(null);

  const className = clsx(props.className, classes.clickable);

  if (href) {
    return (
      <a className={className} style={style} href={href} ref={ref}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} style={style} onClick={onClick} type="button">
      {children}
    </button>
  );
});
