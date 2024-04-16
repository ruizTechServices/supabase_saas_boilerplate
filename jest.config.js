//C:\Users\NEWOWNER\local_only\local_ruiztechservices\templates\SaasFrameworks\supabase_saas_boilerplate\jest.config.js
module.exports = {
  // Indicates that tests should be in files with specific extensions
  testMatch: [
    "**/__tests__/**/*.+(js|jsx|ts|tsx)",
    "**/?(*.)+(spec|test).+(js|jsx|ts|tsx)",
  ],

  // Configure transforming JS modules for Jest
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },

  // This allows you to use absolute imports (eg: import MyComponent from 'components/MyComponent')
  moduleDirectories: ["node_modules", "<rootDir>/"],

  // Setup file to run before tests start, useful for global setup logic
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  preset: "ts-jest",
  testEnvironment: "node",
  setupFilesAfterEnv: ["./jest.setup.js"],
};
