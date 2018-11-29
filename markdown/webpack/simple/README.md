# 例

~~~bash 
$ npm install webpack && npx webpack

> fsevents@1.2.4 install /Users/hide/Documents/Tech/annotated-js/markdown/webpack/sample/node_modules/fsevents
> node install

[fsevents] Success: "/Users/hide/Documents/Tech/annotated-js/markdown/webpack/sample/node_modules/fsevents/lib/binding/Release/node-v64-darwin-x64/fse.node" already installed
Pass --update-binary to reinstall or --build-from-source to recompile
npm WARN saveError ENOENT: no such file or directory, open '/Users/hide/Documents/Tech/annotated-js/markdown/webpack/sample/package.json'
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN enoent ENOENT: no such file or directory, open '/Users/hide/Documents/Tech/annotated-js/markdown/webpack/sample/package.json'
npm WARN sample No description
npm WARN sample No repository field.
npm WARN sample No README data
npm WARN sample No license field.

+ webpack@4.26.1
added 389 packages from 297 contributors and audited 4152 packages in 8.603s
found 0 vulnerabilities

One CLI for webpack must be installed. These are recommended choices, delivered as separate packages:
 - webpack-cli (https://github.com/webpack/webpack-cli)
   The original webpack full-featured CLI.
We will use "npm" to install the CLI via "npm install -D".
Do you want to install 'webpack-cli' (yes/no): yes
Installing 'webpack-cli' (running 'npm install -D webpack-cli')...
npm WARN saveError ENOENT: no such file or directory, open '/Users/hide/Documents/Tech/annotated-js/markdown/webpack/sample/package.json'
npm WARN enoent ENOENT: no such file or directory, open '/Users/hide/Documents/Tech/annotated-js/markdown/webpack/sample/package.json'
npm WARN sample No description
npm WARN sample No repository field.
npm WARN sample No README data
npm WARN sample No license field.

+ webpack-cli@3.1.2
added 58 packages from 15 contributors and audited 16230 packages in 3.884s
found 0 vulnerabilities

Hash: d85946ef2a1e5e557128
Version: webpack 4.26.1
Time: 79ms
Built at: 2018-11-29 21:29:33
    Asset      Size  Chunks             Chunk Names
bundle.js  3.85 KiB    main  [emitted]  main
Entrypoint main = bundle.js
[./app.js] 112 bytes {main} [built]
~~~

~~~bash
$ tree dist/
dist/
└── bundle.js

0 directories, 1 file
~~~