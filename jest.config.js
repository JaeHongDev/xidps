module.exports = {
  setupFilesAfterEnv: ['<rootDir>/test/setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js',
    "^vuetify/lib$": "vuetify",
  },
  moduleFileExtensions: [
    'js',
    'vue',
    'json'
  ],
  modulePaths: [
    "<rootDir>/src",
    "<rootDir>/node_modules"
  ],
  transformIgnorePatterns: [
    "<rootDir>/node_modules/(?!(vuetify)/)",
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest'
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue',
  ],
  testEnvironment: 'jsdom'
}
