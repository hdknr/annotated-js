# HelloElectronVue

## npm install

~~~bash
$ npm install
npm WARN deprecated babel-preset-babili@0.1.4: babili has been renamed to babel-minify. Please update to babel-preset-minify
npm WARN deprecated circular-json@0.5.9: CircularJSON is in maintenance only, flatted is its successor.
npm WARN deprecated nodemailer@2.7.2: All versions below 4.0.1 of Nodemailer are deprecated. See https://nodemailer.com/status/
npm WARN deprecated mailcomposer@4.0.1: This project is unmaintained
npm WARN deprecated socks@1.1.9: If using 2.x branch, please upgrade to at least 2.1.6 to avoid a serious bug with socket data flow and an import issue introduced in 2.1.0
npm WARN deprecated uws@9.14.0: stop using this version
npm WARN deprecated node-uuid@1.4.8: Use uuid module instead
npm WARN deprecated buildmail@4.0.1: This project is unmaintained
npm WARN deprecated cryptiles@2.0.5: This version is no longer maintained. Please upgrade to the latest version.
npm WARN deprecated boom@2.10.1: This version is no longer maintained. Please upgrade to the latest version.
npm WARN deprecated hoek@2.16.3: This version is no longer maintained. Please upgrade to the latest version.

> fsevents@1.2.4 install /Users/hide/Documents/Tech/annotated-js/samples/HelloElectronVue/node_modules/fsevents
> node install

[fsevents] Success: "/Users/hide/Documents/Tech/annotated-js/samples/HelloElectronVue/node_modules/fsevents/lib/binding/Release/node-v64-darwin-x64/fse.node" already installed
Pass --update-binary to reinstall or --build-from-source to recompile

> uws@9.14.0 install /Users/hide/Documents/Tech/annotated-js/samples/HelloElectronVue/node_modules/uws
> node-gyp rebuild > build_log.txt 2>&1 || exit 0


> electron-chromedriver@1.8.0 install /Users/hide/Documents/Tech/annotated-js/samples/HelloElectronVue/node_modules/electron-chromedriver
> node ./download-chromedriver.js

successfully dowloaded and extracted!

> node-sass@4.10.0 install /Users/hide/Documents/Tech/annotated-js/samples/HelloElectronVue/node_modules/node-sass
> node scripts/install.js

Cached binary found at /Users/hide/.npm/node-sass/4.10.0/darwin-x64-64_binding.node

> electron@2.0.14 postinstall /Users/hide/Documents/Tech/annotated-js/samples/HelloElectronVue/node_modules/electron
> node install.js

Downloading SHASUMS256.txt
[============================================>] 100.0% of 5.39 kB (5.39 kB/s)

> node-sass@4.10.0 postinstall /Users/hide/Documents/Tech/annotated-js/samples/HelloElectronVue/node_modules/node-sass
> node scripts/build.js

Binary found at /Users/hide/Documents/Tech/annotated-js/samples/HelloElectronVue/node_modules/node-sass/vendor/darwin-x64-64/binding.node
Testing binary
Binary is fine

> helloev@0.0.1 postinstall /Users/hide/Documents/Tech/annotated-js/samples/HelloElectronVue
> npm run lint:fix


> helloev@0.0.1 lint:fix /Users/hide/Documents/Tech/annotated-js/samples/HelloElectronVue
> eslint --ext .js,.vue -f ./node_modules/eslint-friendly-formatter --fix src test

npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN karma-webpack@3.0.5 requires a peer of webpack@^2.0.0 || ^3.0.0 but none is installed. You must install peer dependenciesyourself.
npm WARN helloev@0.0.1 No repository field.
npm WARN helloev@0.0.1 No license field.

added 1934 packages from 2050 contributors in 74.045s
[!] 6 vulnerabilities found [18834 packages audited]
    Severity: 1 low | 5 moderate
    Run `npm audit` for more detail
~~~

## npm audit

~~~bash 
$ npm audit fix

                       === npm audit security report ===



# Run `npm install karma@3.1.1` to resolve 6 vulnerabilities
SEMVER WARNING: Recommended action is a potentially breaking change
┌───────────────┬──────────────────────────────────────────────────────────────┐
│ moderate      │ Memory Exposure                                              │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Package       │ tunnel-agent                                                 │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Dependency of │ karma [dev]                                                  │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Path          │ karma > log4js > loggly > request > tunnel-agent             │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ More info     │ https://nodesecurity.io/advisories/598                       │
└───────────────┴──────────────────────────────────────────────────────────────┘
┌───────────────┬──────────────────────────────────────────────────────────────┐
│ moderate      │ Prototype pollution                                          │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Package       │ hoek                                                         │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Dependency of │ karma [dev]                                                  │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Path          │ karma > log4js > loggly > request > hawk > boom > hoek       │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ More info     │ https://nodesecurity.io/advisories/566                       │
└───────────────┴──────────────────────────────────────────────────────────────┘
┌───────────────┬──────────────────────────────────────────────────────────────┐
│ moderate      │ Prototype pollution                                          │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Package       │ hoek                                                         │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Dependency of │ karma [dev]                                                  │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Path          │ karma > log4js > loggly > request > hawk > cryptiles > boom  │
│               │ > hoek                                                       │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ More info     │ https://nodesecurity.io/advisories/566                       │
└───────────────┴──────────────────────────────────────────────────────────────┘
┌───────────────┬──────────────────────────────────────────────────────────────┐
│ moderate      │ Prototype pollution                                          │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Package       │ hoek                                                         │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Dependency of │ karma [dev]                                                  │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Path          │ karma > log4js > loggly > request > hawk > hoek              │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ More info     │ https://nodesecurity.io/advisories/566                       │
└───────────────┴──────────────────────────────────────────────────────────────┘
┌───────────────┬──────────────────────────────────────────────────────────────┐
│ moderate      │ Prototype pollution                                          │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Package       │ hoek                                                         │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Dependency of │ karma [dev]                                                  │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Path          │ karma > log4js > loggly > request > hawk > sntp > hoek       │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ More info     │ https://nodesecurity.io/advisories/566                       │
└───────────────┴──────────────────────────────────────────────────────────────┘
┌───────────────┬──────────────────────────────────────────────────────────────┐
│ low           │ Regular Expression Denial of Service                         │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Package       │ timespan                                                     │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Dependency of │ karma [dev]                                                  │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Path          │ karma > log4js > loggly > timespan                           │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ More info     │ https://nodesecurity.io/advisories/533                       │
└───────────────┴──────────────────────────────────────────────────────────────┘

[!] 6 vulnerabilities found - Packages audited: 18834 (18355 dev, 722 optional)
    Severity: 1 low | 5 moderate
~~~

~~~bash 
$ npm install karma@3.1.1
npm WARN deprecated circular-json@0.5.9: CircularJSON is in maintenance only, flatted is its successor.
npm WARN karma-webpack@3.0.5 requires a peer of webpack@^2.0.0 || ^3.0.0 but none is installed. You must install peer dependenciesyourself.
npm WARN helloev@0.0.1 No repository field.
npm WARN helloev@0.0.1 No license field.

+ karma@3.1.1
added 1 package from 1 contributor, removed 103 packages and updated 7 packages in 13.029s
[+] no known vulnerabilities found [18405 packages audited]
~~~

~~~bash
$ npm audit

                       === npm audit security report ===

[+] no known vulnerabilities found
    Packages audited: 18405 (17926 dev, 293 optional)
~~~