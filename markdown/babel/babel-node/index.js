/*
$ npm install --save-dev @babel/core @babel/node  @babel/preset-env

.babelrc:

{
  "presets": ["@babel/preset-env"]
}
*/
import fs from 'fs'
console.log(fs.readdirSync('.'))