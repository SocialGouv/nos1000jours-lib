module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    "<rootDir>/lib"
  ]
};