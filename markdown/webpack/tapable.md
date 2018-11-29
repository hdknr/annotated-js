# tapable

- https://github.com/webpack/tapable

## DeprecationWarning: Tapable.plugin is deprecated. Use new API on `.hooks` instead

~~~bash 
$ npm run unit
...

(node:86131) DeprecationWarning: Tapable.plugin is deprecated. Use new API on `.hooks` instead
~~~

- [Tapable.plugin is deprecated. Use new API on `.hooks` instead · Issue #6568 · webpack/webpack](https://github.com/webpack/webpack/issues/6568)
- [webpack3から4に移行した時に出たエラーとやったこと | e-JOINT.jp](https://e-joint.jp/504/)
- [railsでwebpackerを使用する際、Error: Chunk.entrypointsが出てハマった - Qiita](https://qiita.com/daikichi412/items/409fafe943e79718b765)

インストールしてみたが消えない...:

~~~bash
$ npm install --save-dev extract-text-webpack-plugin@4.0.0-beta.0

npm WARN karma-webpack@3.0.5 requires a peer of webpack@^2.0.0 || ^3.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN helloev@0.0.1 No repository field.
npm WARN helloev@0.0.1 No license field.

+ extract-text-webpack-plugin@4.0.0-beta.0
updated 1 package in 11.988s
[+] no known vulnerabilities found [18423 packages audited]
~~~

~~~bash
$ npm outdated

Package                           Current        Wanted   Latest  Location
babel-eslint                        8.2.6         8.2.6   10.0.1  helloev
babel-loader                        7.1.5         7.1.5    8.0.4  helloev
babel-plugin-istanbul               4.1.6         4.1.6    5.1.0  helloev
css-loader                        0.28.11       0.28.11    1.0.1  helloev
electron                           2.0.14        2.0.14   3.0.10  helloev
electron-builder                  20.36.2       20.38.0  20.38.0  helloev
electron-debug                      1.5.0         1.5.0    2.0.0  helloev
eslint                             4.19.1        4.19.1    5.9.0  helloev
eslint-config-standard             11.0.0        11.0.0   12.0.0  helloev
eslint-plugin-html                  4.0.6         4.0.6    5.0.0  helloev
eslint-plugin-node                  6.0.1         6.0.1    8.0.0  helloev
eslint-plugin-promise               3.8.0         3.8.0    4.0.1  helloev
eslint-plugin-standard              3.1.0         3.1.0    4.0.0  helloev
extract-text-webpack-plugin  4.0.0-beta.0  4.0.0-beta.0    3.0.2  helloev
file-loader                        1.1.11        1.1.11    2.0.0  helloev
mini-css-extract-plugin             0.4.0         0.4.0    0.4.5  helloev
require-dir                         1.1.0         1.2.0    1.2.0  helloev
spectron                            3.8.0         3.8.0    5.0.0  helloev
style-loader                       0.21.0        0.21.0   0.23.1  helloev
vue-router                          3.0.1         3.0.2    3.0.2  helloev
webpack                            4.26.0        4.26.1   4.26.1  helloev
~~~

~~~bash
$ npm update

npm WARN karma-webpack@3.0.5 requires a peer of webpack@^2.0.0 || ^3.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN helloev@0.0.1 No repository field.
npm WARN helloev@0.0.1 No license field.

+ require-dir@1.2.0
+ vue-router@3.0.2
+ webpack@4.26.1
+ electron-builder@20.38.0
added 2 packages from 1 contributor, updated 10 packages and audited 18423 packages in 18.781s
found 0 vulnerabilities
~~~

~~~bash 
$ npm outdated

Package                           Current        Wanted  Latest  Location
babel-eslint                        8.2.6         8.2.6  10.0.1  helloev
babel-loader                        7.1.5         7.1.5   8.0.4  helloev
babel-plugin-istanbul               4.1.6         4.1.6   5.1.0  helloev
css-loader                        0.28.11       0.28.11   1.0.1  helloev
electron                           2.0.14        2.0.14  3.0.10  helloev
electron-debug                      1.5.0         1.5.0   2.0.0  helloev
eslint                             4.19.1        4.19.1   5.9.0  helloev
eslint-config-standard             11.0.0        11.0.0  12.0.0  helloev
eslint-plugin-html                  4.0.6         4.0.6   5.0.0  helloev
eslint-plugin-node                  6.0.1         6.0.1   8.0.0  helloev
eslint-plugin-promise               3.8.0         3.8.0   4.0.1  helloev
eslint-plugin-standard              3.1.0         3.1.0   4.0.0  helloev
extract-text-webpack-plugin  4.0.0-beta.0  4.0.0-beta.0   3.0.2  helloev
file-loader                        1.1.11        1.1.11   2.0.0  helloev
mini-css-extract-plugin             0.4.0         0.4.0   0.4.5  helloev
spectron                            3.8.0         3.8.0   5.0.0  helloev
style-loader                       0.21.0        0.21.0  0.23.1  helloev
~~~

## karma-webpack の問題 では

- [DeprecationWarning: Tapable.plugin is deprecated · Issue #3 · davidwallacejackson/vue-cli-plugin-unit-karma](https://github.com/davidwallacejackson/vue-cli-plugin-unit-karma/issues/3)
- [Webpack 4: DeprecationWarning: Tapable.plugin is deprecated. Use new API on `.hooks` instead · Issue #320 · webpack-contrib/karma-webpack](https://github.com/webpack-contrib/karma-webpack/issues/320)


~~~bash 
$ npm list 
....
npm ERR! peer dep missing: webpack@^2.0.0 || ^3.0.0, required by karma-webpack@3.0.5
~~~

~~~bash 
$ npm i -D karma-webpack@next
npm WARN helloev@0.0.1 No repository field.
npm WARN helloev@0.0.1 No license field.

+ karma-webpack@4.0.0-rc.4
removed 10 packages, updated 3 packages and audited 18383 packages in 13.8s
found 0 vulnerabilities
~~~

これでOKです:

~~~bash 
$ npm run unit

> helloev@0.0.1 unit /Users/hide/Documents/Tech/annotated-js/samples/HelloElectronVue
> karma start test/unit/karma.conf.js

⚠ ｢wdm｣: Hash: 6632461ad1100442a0f1
~~~