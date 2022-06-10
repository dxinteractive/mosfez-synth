import { Dendriform } from "dendriform";

export type SurfaceState = {
  keySize: number;
  rootPositionX: number;
  rootPositionY: number;
};

export type SidebarState = {
  open: boolean;
  surfaceOpen: boolean;
  consoleOpen: boolean;
};

export type AppState = {
  surface: SurfaceState;
  sidebar: SidebarState;
};

const stateFromStorage: AppState = JSON.parse(
  localStorage?.getItem("app-state") || "{}"
);

export const defaultState: AppState = {
  surface: {
    keySize: 40,
    rootPositionX: 0.2,
    rootPositionY: 0.8,
  },
  sidebar: {
    open: false,
    surfaceOpen: true,
    consoleOpen: false,
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
});

appState.onDerive((value) => {
  localStorage?.setItem("app-state", JSON.stringify(value));
});

export const resetAppState = () => {
  appState.set(stateFromStorage);
};
