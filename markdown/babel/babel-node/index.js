/*
$ npm install --save-dev @babel/core @babel/node  @babel/preset-env

$ cat .babelrc
{
  "presets": ["@babel/preset-env"]
}

$ npx babel-node index.js
*/
import fs from 'fs'
console.log(fs.readdirSync('.'))
