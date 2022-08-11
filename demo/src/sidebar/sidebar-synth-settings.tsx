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
      More synth options will be added soon.
      <br />
      <br />
      Right now we have a triangle with fast attack and slow release, with up to
      8 voices, each voice randomly panned and passed through a tremolo effect
      on note start.
    </div>
  );
}
