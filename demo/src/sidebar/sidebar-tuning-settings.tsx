import { appState } from "../data/app-state";
import { useNumberToString } from "../form-utils/form-utils";
import { useInput } from "dendriform";
import { FieldRow } from "./field-row";

const tuning = appState.branch("tuning");

export function SidebarTuningSettings() {
  return (
    <div>
      <FieldRow label="edo">
        {tuning.render("scaleSize", (scaleSizeForm) => {
          const [asString] = useNumberToString(scaleSizeForm);
          return (
            <input
              type="number"
              step="1"
              min="1"
              max="311"
              {...useInput(asString)}
            />
          );
        })}
      </FieldRow>
      {/* <FieldRow label="root Hz">
        {tuning.render("rootHz", (rootHzForm) => {
          const [asString] = useNumberToString(rootHzForm);
          return (
            <input
              type="number"
              step="1"
              min="1"
              max="10000"
              {...useInput(asString)}
            />
          );
        })}
      </FieldRow> */}
    </div>
  );
}
