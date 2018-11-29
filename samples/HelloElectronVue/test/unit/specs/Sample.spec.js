// Test Runner: https://github.com/karma-runner/karma
// Assertion Library: https://github.com/xdissent/karma-chai, https://www.chaijs.com/
// Coverage: https://github.com/karma-runner/karma-coverage
// Testing Framework: https://github.com/karma-runner/karma-mocha
// Preprocessor(Source Map locattor/loader): https://github.com/demerzel3/karma-sourcemap-loader
// Reporter: https://github.com/mlex/karma-spec-reporter
// Webpack Middleware: https://github.com/webpack-contrib/karma-webpack
// Karma Launcher and Preprocessor: https://github.com/twolfson/karma-electron

import fs from 'fs'
import os from 'os'

describe('Karma Sample Case', () => {
  it('equal test', () => {
    const flag = true
    expect(flag).equal(true)
  })

  it('check a folder', () => {
    const home = os.homedir
    const flag = fs.existsSync(`${home}/Downloads`)
    expect(flag).equal(true)
  })

  it('json serialization', () => {
    const obj = {name: 'hello', runner: 'karma'}
    const path = `${os.homedir}/Downloads/obj.json`
    fs.writeFileSync(path, JSON.stringify(obj))
    const obj2 = JSON.parse(fs.readFileSync(path))
    expect(obj.name).equal(obj2.name)
    expect(obj.runner).equal(obj2.runner)
  })
})
