import { Dendriform } from "dendriform";

export type LogType = "log" | "warn" | "error";

export type Log = {
  type: LogType;
  text: string;
};

export const consoleStore = new Dendriform<Log[]>([]);

const createLogger =
  (type: LogType) =>
  (...args: unknown[]) => {
    const text = args.join(" ");
    consoleStore.set((draft) => {
      draft.unshift({ type, text });
      draft.length = 25;
    });
  };

export const appConsole = {
  log: createLogger("log"),
  warn: createLogger("warn"),
  error: createLogger("error"),
  clear: () => consoleStore.set([]),
};
