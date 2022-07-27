import type { Config } from "@jest/types";

export default async (): Promise<Config.InitialOptions> => {
  return {
    preset: "ts-jest",
    testEnvironment: "node",
    testPathIgnorePatterns: ["/node_modules/", "/demo/"],
    modulePathIgnorePatterns: ["/demo/"],
    collectCoverage: true,
  };
};
