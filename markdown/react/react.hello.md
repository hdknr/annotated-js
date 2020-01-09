# helloreact

~~~bash
$ node -v
v13.6.0
~~~

[facebook/create-react-app](https://github.com/facebook/create-react-app):

~~~bash
$ npm install -g create-react-app  
/Users/hdknr/.anyenv/envs/nodenv/versions/13.6.0/bin/create-react-app -> /Users/hdknr/.anyenv/envs/nodenv/versions/13.6.0/lib/node_modules/create-react-app/index.js
+ create-react-app@3.3.0
added 91 packages from 45 contributors in 2.822s
~~~

~~~bash 
$ npx create-react-app helloreact

Creating a new React app in /Users/hdknr/Documents/Dropbox/Projects/Tech/annotated-js/samples/helloreact.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...


> fsevents@1.2.11 install /Users/hdknr/Documents/Dropbox/Projects/Tech/annotated-js/samples/helloreact/node_modules/chokidar/node_modules/fsevents
> node-gyp rebuild

  SOLINK_MODULE(target) Release/.node
  CXX(target) Release/obj.target/fse/fsevents.o
  SOLINK_MODULE(target) Release/fse.node

> fsevents@1.2.11 install /Users/hdknr/Documents/Dropbox/Projects/Tech/annotated-js/samples/helloreact/node_modules/jest-haste-map/node_modules/fsevents
> node-gyp rebuild

  SOLINK_MODULE(target) Release/.node
  CXX(target) Release/obj.target/fse/fsevents.o
  SOLINK_MODULE(target) Release/fse.node

> core-js@2.6.11 postinstall /Users/hdknr/Documents/Dropbox/Projects/Tech/annotated-js/samples/helloreact/node_modules/babel-runtime/node_modules/core-js
> node -e "try{require('./postinstall')}catch(e){}"


> core-js@3.6.2 postinstall /Users/hdknr/Documents/Dropbox/Projects/Tech/annotated-js/samples/helloreact/node_modules/core-js
> node -e "try{require('./postinstall')}catch(e){}"


> core-js-pure@3.6.2 postinstall /Users/hdknr/Documents/Dropbox/Projects/Tech/annotated-js/samples/helloreact/node_modules/core-js-pure
> node -e "try{require('./postinstall')}catch(e){}"

+ react-scripts@3.3.0
+ react-dom@16.12.0
+ cra-template@1.0.0
+ react@16.12.0
added 1675 packages from 765 contributors and audited 906206 packages in 41.061s

33 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities


Installing template dependencies using npm...
npm WARN tsutils@3.17.1 requires a peer of typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta but none is installed. You must install peer dependencies yourself.

+ @testing-library/jest-dom@4.2.4
+ @testing-library/user-event@7.2.1
+ @testing-library/react@9.4.0
added 17 packages from 41 contributors and audited 906378 packages in 8.186s

33 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

Removing template package using npm...

npm WARN tsutils@3.17.1 requires a peer of typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta but none is installed. You must install peer dependencies yourself.

removed 1 package and audited 906377 packages in 6.231s

33 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities


Success! Created helloreact at /Users/hdknr/Documents/Dropbox/Projects/Tech/annotated-js/samples/helloreact
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

  cd helloreact
  npm start

Happy hacking!
~~~

~~~bash 
$ cd helloreact/
$ npm start
~~~
~~~bash
Compiled successfully!

You can now view helloreact in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://192.168.100.7:3000/

Note that the development build is not optimized.
To create a production build, use npm run build.
~~~

~~~bash
$ npm run build

> helloreact@0.1.0 build /Users/hdknr/Documents/Dropbox/Projects/Tech/annotated-js/samples/helloreact
> react-scripts build

Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  39.84 KB  build/static/js/2.68fc5873.chunk.js
  774 B     build/static/js/runtime-main.6a145c43.js
  611 B     build/static/js/main.bb7c8a24.chunk.js
  547 B     build/static/css/main.d1b05096.chunk.css

The project was built assuming it is hosted at the server root.
You can control this with the homepage field in your package.json.
For example, add this to build it for GitHub Pages:

  "homepage" : "http://myname.github.io/myapp",

The build folder is ready to be deployed.
You may serve it with a static server:

  npm install -g serve
  serve -s build

Find out more about deployment here:

  bit.ly/CRA-deploy
~~~

- https://github.com/facebook/create-react-app/blob/master/packages/cra-template/template/README.md

## 記事

- [create-react-app が裏で何をやっているか理解する - Qiita](https://qiita.com/naohikowatanabe/items/71a8bf477216ef56a5b7)
- [React+ElectronでHello Worldする - Qiita](https://qiita.com/niusounds/items/0c0016fdcc67cd12a954)