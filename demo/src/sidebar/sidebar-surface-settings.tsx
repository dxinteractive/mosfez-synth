import { appState } from "../data/app-state";
import { useNumberToString } from "../form-utils/form-utils";
import { useInput } from "dendriform";
import { FieldRow } from "./field-row";

const surface = appState.branch("surface");

export function SidebarSurfaceSettings() {
  return (
    <div>
      <FieldRow label="key size">
        {surface.render("keySize", (keySizeForm) => {
          const [asString] = useNumberToString(keySizeForm);
          return (
            <input type="range" min="20" max="200" {...useInput(asString)} />
          );
        })}
      </FieldRow>
      <FieldRow label="key offset x">
        {surface.render("rootPositionX", (rootPositionXForm) => {
          const [asString] = useNumberToString(rootPositionXForm);
          return (
            <input
              type="range"
              min="0"
              max="1"
              step="0.001"
              {...useInput(asString)}
            />
          );
        })}
      </FieldRow>
      <FieldRow label="key offset y">
        {surface.render("rootPositionY", (rootPositionYForm) => {
          const [asString] = useNumberToString(rootPositionYForm);
          return (
            <input
              type="range"
              min="0"
              max="1"
              step="0.001"
              {...useInput(asString)}
            />
          );
        })}
      </FieldRow>
      <FieldRow label="step size up">
        {surface.render("stepSizeY", (stepSizeYForm) => {
          const [asString] = useNumberToString(stepSizeYForm);
          return <input type="number" step="1" {...useInput(asString)} />;
        })}
      </FieldRow>
      <FieldRow label="step size right">
        {surface.render("stepSizeX", (stepSizeXForm) => {
          const [asString] = useNumberToString(stepSizeXForm);
          return <input type="number" step="1" {...useInput(asString)} />;
        })}
      </FieldRow>
    </div>
  );
}
