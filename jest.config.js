module.exports = {
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '.+\\.(css|less)$': '<rootDir>/node_modules/jest-css-modules-transform'
  },
  setupFilesAfterEnv: ['./rtl.setup.js']
};
