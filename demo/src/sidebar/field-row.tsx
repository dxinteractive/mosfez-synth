import classes from "./field-row.module.css";

export type FieldRowProps = {
  label: React.ReactNode;
  children: React.ReactNode;
};

export function FieldRow(props: FieldRowProps) {
  return (
    <div className={classes.fieldrow}>
      <label>{props.label}</label>
      {props.children}
    </div>
  );
}
