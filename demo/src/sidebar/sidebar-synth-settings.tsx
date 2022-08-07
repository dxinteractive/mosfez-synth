import { appState } from "../data/app-state";
import { useInput } from "dendriform";
import { FieldRow } from "./field-row";

const synth = appState.branch("synth");

export function SidebarSynthSettings() {
  return (
    <div>
      <FieldRow label="polyphony mode">
        {synth.render("polyMode", (polyForm) => {
          return (
            <select {...useInput(polyForm)}>
              <option value="per-cell">per-cell</option>
              <option value="per-pointer">per-pointer</option>
              <option value="per-pitch">per-pitch</option>
            </select>
          );
        })}
      </FieldRow>
    </div>
  );
}
