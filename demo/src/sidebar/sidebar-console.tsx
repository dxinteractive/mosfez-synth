import classes from "./sidebar-console.module.css";
import clsx from "clsx";
import { consoleStore, Log } from "../data/console";

export function Console() {
  const lines = consoleStore.useValue();
  return (
    <div>
      {lines.map((line, i) => (
        <LogLine {...line} key={i} />
      ))}
    </div>
  );
}

function LogLine({ type, text }: Log) {
  return <div className={clsx(classes.line, classes[type])}>{text}</div>;
}
