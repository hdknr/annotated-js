# [babel-node](https://babeljs.io/docs/en/babel-node)

~~~bash
$ npm install --save-dev @babel/core @babel/node  @babel/preset-env
.
~~~

.babelrc:

~~~json
{
  "presets": ["@babel/preset-env"]
}
~~~

~~~bash
$ npx babel-node --version
7.2.2
~~~

REPL:

~~~js
$ npx babel-node
> class Test {}
undefined
> var t = new Test()
undefined
> t
Test {}
~~~

Evaluates:

~~~bash
$ npx babel-node -e "class Test { };var t = new Test(); console.log(t);"
Test {}
~~~

index.js:

~~~js
import fs from 'fs'
console.log(fs.readdirSync('.'))
~~~

~~~bash
$ $ npx babel-node index.js

[ '.babelrc',
  '.node-version',
  'README.md',
  'index.js',
  'node_modules',
  'package-lock.json' ]
~~~