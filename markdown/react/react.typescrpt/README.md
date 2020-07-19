# React Typescript

~~~zsh
% npx create-react-app hello --template typescript

Creating a new React app in /Users/hdknr/Documents/Dropbox/Projects/Tech/annotated-js/markdown/react/react.typescrpt/hello.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template-typescript...

yarn add v1.22.0
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
error browserslist@4.13.0: The engine "node" is incompatible with this module. Expected version "^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7". Got "13.6.0"
error Found incompatible module.
info Visit https://yarnpkg.com/en/docs/cli/add for documentation about this command.

Aborting installation.
  yarnpkg add --exact react react-dom react-scripts cra-template-typescript --cwd /Users/hdknr/Documents/Dropbox/Projects/Tech/annotated-js/markdown/react/react.typescrpt/hello has failed.

Deleting generated file... package.json
Deleting generated file... yarn.lock
Deleting hello/ from /Users/hdknr/Documents/Dropbox/Projects/Tech/annotated-js/markdown/react/react.typescrpt
Done.
~~~

~~~zsh
% node -v
v13.6.0

% nodenv versions
  12.16.1
  12.18.2
* 13.6.0 (set by /Users/hdknr/.anyenv/envs/nodenv/version)
  14.5.0

% nodenv local 14.5.0
% node -v
v14.5.0
~~~

~~~zsh
% npx create-react-app hello --template typescript
npx: 98個のパッケージを4.29秒でインストールしました。

Creating a new React app in /Users/hdknr/Documents/Dropbox/Projects/Tech/annotated-js/markdown/react/react.typescrpt/hello.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template-typescript...


> fsevents@1.2.13 install /Users/hdknr/Documents/Dropbox/Projects/Tech/annotated-js/markdown/react/react.typescrpt/hello/node_modules/jest-haste-map/node_modules/fsevents
> node install.js

  SOLINK_MODULE(target) Release/.node
  CXX(target) Release/obj.target/fse/fsevents.o
  SOLINK_MODULE(target) Release/fse.node

> fsevents@1.2.13 install /Users/hdknr/Documents/Dropbox/Projects/Tech/annotated-js/markdown/react/react.typescrpt/hello/node_modules/watchpack-chokidar2/node_modules/fsevents
> node install.js

  SOLINK_MODULE(target) Release/.node
  CXX(target) Release/obj.target/fse/fsevents.o
  SOLINK_MODULE(target) Release/fse.node

> fsevents@1.2.13 install /Users/hdknr/Documents/Dropbox/Projects/Tech/annotated-js/markdown/react/react.typescrpt/hello/node_modules/webpack-dev-server/node_modules/fsevents
> node install.js

  SOLINK_MODULE(target) Release/.node
  CXX(target) Release/obj.target/fse/fsevents.o
  SOLINK_MODULE(target) Release/fse.node

> core-js@2.6.11 postinstall /Users/hdknr/Documents/Dropbox/Projects/Tech/annotated-js/markdown/react/react.typescrpt/hello/node_modules/babel-runtime/node_modules/core-js
> node -e "try{require('./postinstall')}catch(e){}"


> core-js@3.6.5 postinstall /Users/hdknr/Documents/Dropbox/Projects/Tech/annotated-js/markdown/react/react.typescrpt/hello/node_modules/core-js
> node -e "try{require('./postinstall')}catch(e){}"


> core-js-pure@3.6.5 postinstall /Users/hdknr/Documents/Dropbox/Projects/Tech/annotated-js/markdown/react/react.typescrpt/hello/node_modules/core-js-pure
> node -e "try{require('./postinstall')}catch(e){}"

+ react-scripts@3.4.1
+ react@16.13.1
+ react-dom@16.13.1
+ cra-template-typescript@1.0.3
added 1609 packages from 761 contributors and audited 1609 packages in 39.444s

62 packages are looking for funding
  run `npm fund` for details

found 1 low severity vulnerability
  run `npm audit fix` to fix them, or `npm audit` for details

Installing template dependencies using npm...
+ @types/react-dom@16.9.8
+ @types/react@16.9.43
+ @types/jest@24.9.1
+ @types/node@12.12.50
+ @testing-library/user-event@7.2.1
+ @testing-library/jest-dom@4.2.4
+ @testing-library/react@9.5.0
+ typescript@3.7.5
added 38 packages from 80 contributors, updated 1 package and audited 1649 packages in 10.815s

62 packages are looking for funding
  run `npm fund` for details

found 1 low severity vulnerability
  run `npm audit fix` to fix them, or `npm audit` for details

We detected TypeScript in your project (src/App.test.tsx) and created a tsconfig.json file for you.

Your tsconfig.json has been populated with default values.

Removing template package using npm...

removed 1 package and audited 1648 packages in 6.012s

62 packages are looking for funding
  run `npm fund` for details

found 1 low severity vulnerability
  run `npm audit fix` to fix them, or `npm audit` for details

Success! Created hello at /Users/hdknr/Documents/Dropbox/Projects/Tech/annotated-js/markdown/react/react.typescrpt/hello
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd hello
  npm start

Happy hacking!
~~~

~~~zsh
% tree hello -I "node_modules"
hello
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.css
│   ├── App.test.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── index.tsx
│   ├── logo.svg
│   ├── react-app-env.d.ts
│   ├── serviceWorker.ts
│   └── setupTests.ts
└── tsconfig.json

2 directories, 19 files
~~~

~~~zsh
% npm audit fix
npm WARN tech@1.0.0 No description
npm WARN tech@1.0.0 No repository field.

up to date in 0.218s

4 packages are looking for funding
  run `npm fund` for details

fixed 0 of 0 vulnerabilities in 57 scanned packages
~~~