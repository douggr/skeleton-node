module.exports = {
  changedSince: "master",
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  modulePathIgnorePatterns: ["<rootDir>/dist"],
  testPathIgnorePatterns: ["/dist/", "/docs/", "/examples/", "/node_modules/"],
  transform: { "^.+\\.(ts|tsx)$": "ts-jest" },
};
