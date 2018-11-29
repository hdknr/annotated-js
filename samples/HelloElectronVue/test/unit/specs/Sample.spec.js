// Test Runner: https://github.com/karma-runner/karma
// Assertion Library: https://github.com/xdissent/karma-chai, https://www.chaijs.com/
// Coverage: https://github.com/karma-runner/karma-coverage
// Testing Framework: https://github.com/karma-runner/karma-mocha
// Preprocessor(Source Map locattor/loader): https://github.com/demerzel3/karma-sourcemap-loader
// Reporter: https://github.com/mlex/karma-spec-reporter
// Webpack Middleware: https://github.com/webpack-contrib/karma-webpack
// Karma Launcher and Preprocessor: https://github.com/twolfson/karma-electron

describe('Karma Sample Case', () => {
  it('equal test', () => {
    const flag = true
    expect(flag).equal(true)
  })
})