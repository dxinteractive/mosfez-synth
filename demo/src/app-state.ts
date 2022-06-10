import { Dendriform } from "dendriform";

type AppState = {
  sidebarOpen: boolean;
  keyWidth: number;
  keyHeight: number;
  keyOffsetX: number;
  keyOffsetY: number;
};

const stateFromStorage: AppState = JSON.parse(
  localStorage?.getItem("app-state") || "{}"
);

export const defaultState: AppState = {
  sidebarOpen: true,
  keyWidth: 40,
  keyHeight: 40,
  keyOffsetX: 0,
  keyOffsetY: 0,
};

export const appState = new Dendriform<AppState>({
  ...defaultState,
  ...(stateFromStorage ?? {}),
});

appState.onDerive((value) => {
  localStorage?.setItem("app-state", JSON.stringify(value));
});

export const resetAppState = () => {
  appState.set(stateFromStorage);
};
