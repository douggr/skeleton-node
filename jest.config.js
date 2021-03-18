module.exports = {
  changedSince: "master",
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  silent: true,
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
  modulePathIgnorePatterns: ["<rootDir>/dist"],
  testPathIgnorePatterns: ["/dist/", "/docs/", "/examples/", "/node_modules/"],
  transform: { "^.+\\.(ts|tsx)$": "ts-jest" },
};
