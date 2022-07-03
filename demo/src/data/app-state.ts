import { Dendriform } from "dendriform";

export type SurfaceState = {
  keySize: number;
  rootPositionX: number;
  rootPositionY: number;
  stepSizeX: number;
  stepSizeY: number;
};

export type SidebarState = {
  open: boolean;
  surfaceOpen: boolean;
  consoleOpen: boolean;
};

export type TuningState = {
  rootHz: number;
  scaleSize: number;
};

export type AppState = {
  surface: SurfaceState;
  sidebar: SidebarState;
  tuning: TuningState;
};

const stateFromStorage: AppState = JSON.parse(
  localStorage?.getItem("app-state") || "{}"
);

export const defaultState: AppState = {
  surface: {
    keySize: 60,
    rootPositionX: 0.4,
    rootPositionY: 0.6,
    stepSizeX: 1,
    stepSizeY: 5,
  },
  sidebar: {
    open: false,
    surfaceOpen: true,
    consoleOpen: false,
  },
  tuning: {
    rootHz: 440,
    scaleSize: 12,
  },
};

export const appState = new Dendriform<AppState>({
  ...defaultState,
  ...(stateFromStorage ?? {}),
  surface: {
    ...defaultState.surface,
    ...(stateFromStorage.surface ?? {}),
  },
  sidebar: {
    ...defaultState.sidebar,
    ...(stateFromStorage.sidebar ?? {}),
  },
  tuning: {
    ...defaultState.tuning,
    ...(stateFromStorage.tuning ?? {}),
  },
});

appState.onDerive((value) => {
  localStorage?.setItem("app-state", JSON.stringify(value));
});

export const resetAppState = () => {
  appState.set(stateFromStorage);
};
