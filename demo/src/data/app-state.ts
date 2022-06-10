import { Dendriform } from "dendriform";

export type SurfaceState = {
  keySize: number;
  rootPositionX: number;
  rootPositionY: number;
};

export type AppState = {
  sidebarOpen: boolean;
  surface: SurfaceState;
};

const stateFromStorage: AppState = JSON.parse(
  localStorage?.getItem("app-state") || "{}"
);

export const defaultState: AppState = {
  sidebarOpen: true,
  surface: {
    keySize: 40,
    rootPositionX: 0.2,
    rootPositionY: 0.8,
  },
};

export const appState = new Dendriform<AppState>({
  ...defaultState,
  ...(stateFromStorage ?? {}),
  surface: {
    ...defaultState.surface,
    ...(stateFromStorage.surface ?? {}),
  },
});

appState.onDerive((value) => {
  localStorage?.setItem("app-state", JSON.stringify(value));
});

export const resetAppState = () => {
  appState.set(stateFromStorage);
};
