/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  preset: 'ts-jest',
  setupFiles: ['react-app-polyfill/jsdom'],
  setupFilesAfterEnv: [
    './node_modules/jest-extended/all.js',
    './src/polyfills/jest/index.ts',
    './src/setupTests.ts',
  ],
  testMatch: ['<rootDir>/src/**/__tests__/**/*.{ts,tsx,js,jsx}', '<rootDir>/src/**/*.{spec,test}.{ts,tsx,js,jsx}'],
  testEnvironment: 'jsdom',
  testRunner: 'jest-circus',
  transform: {
    '^.+\\.(css|styl|less|sass|scss)$': './tools/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)': './tools/jest/fileTransform.js',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'json', 'js'],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  resetMocks: true,
};
