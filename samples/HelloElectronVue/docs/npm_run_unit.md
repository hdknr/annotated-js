# unit testing

~~~bash
$ npm run unit
~~~

~~~bash
> helloev@0.0.1 unit /Users/hide/Documents/Tech/annotated-js/samples/HelloElectronVue
> karma start test/unit/karma.conf.js
~~~

~~~bash
(node:86131) DeprecationWarning: Tapable.plugin is deprecated. Use new API on `.hooks` instead
ℹ ｢wdm｣: wait until bundle finished: noop
~~~

~~~bash
⚠ ｢wdm｣: Hash: 8a865bfe1a574cd5c52e
Version: webpack 4.26.0
Time: 18602ms
Built at: 2018-11-29 10:08:49
                               Asset       Size  Chunks             Chunk Names
23a5895a6f4b7f524bb1.hot-update.json   35 bytes          [emitted]
a2e358e91969f8db1d72.hot-update.json   44 bytes          [emitted]
               imgs/logo--assets.png   60.4 KiB          [emitted]
                          index.html  506 bytes          [emitted]
                            index.js   1.26 MiB       0  [emitted]  index
Entrypoint index = index.js
 [0] ./node_modules/vue/dist/vue.esm.js 286 KiB {0} [built]
 [2] ./src/renderer/components/LandingPage/SystemInformation.vue?vue&type=template&id=7dd5a73e&scoped=true& + 1 modules 1.92 KiB {0} [built]
     | ./src/renderer/components/LandingPage/SystemInformation.vue?vue&type=template&id=7dd5a73e&scoped=true& 239 bytes [built]
     | ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/renderer/components/LandingPage/SystemInformation.vue?vue&type=template&id=7dd5a73e&scoped=true& 1.68 KiB [built]
 [3] ./src/renderer/components/LandingPage.vue?vue&type=template&id=17cac930& + 1 modules 2.64 KiB {0} [built]
     | ./src/renderer/components/LandingPage.vue?vue&type=template&id=17cac930& 215 bytes [built]
     | ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/renderer/components/LandingPage.vue?vue&type=template&id=17cac930& 2.43 KiB [built]
 [5] ./src/renderer/store/modules/index.js 3.41 KiB {0} [built]
 [7] ./src/renderer/components/LandingPage.vue 1.19 KiB {0} [built]
 [8] ./src/renderer/router/index.js 1.58 KiB {0} [optional] [built]
 [9] ./src/renderer/store/index.js 1.7 KiB {0} [optional] [built]
[20] ./src/renderer/components/LandingPage/SystemInformation.vue 1.29 KiB {0} [built]
[27] ./src/renderer/store/modules/Counter.js 2.36 KiB {0} [optional] [built]
[29] ./src/renderer/assets/logo.png 67 bytes {0} [built]
[31] ./src/renderer/App.vue 1.13 KiB {0} [optional] [built]
[34] ./test/unit/index.js 504 bytes {0} [built]
[35] ./test/unit/specs sync \.spec$ 183 bytes {0} [built]
[36] ./test/unit/specs/LandingPage.spec.js 628 bytes {0} [optional] [built]
[40] ./src/renderer sync ^\.\/(?!main(\.js)?$) 653 bytes {0} [built]
    + 61 hidden modules
~~~

~~~bash
WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/concepts/mode/
~~~

~~~bash
Child html-webpack-plugin for "index.html":
                                   Asset      Size  Chunks             Chunk Names
    a2e358e91969f8db1d72.hot-update.json  44 bytes          [emitted]
                              index.html   556 KiB       1
    Entrypoint undefined = index.html
    [0] ./node_modules/html-webpack-plugin/lib/loader.js!./src/index.ejs 1.14 KiB {1} [built]
    [1] ./node_modules/lodash/lodash.js 527 KiB {1} [built]
    [2] (webpack)/buildin/module.js 497 bytes {1} [built]
ℹ ｢wdm｣: Compiled with warnings.
29 11 2018 10:08:49.445:INFO [karma-server]: Karma v3.1.1 server started at http://0.0.0.0:9876/
29 11 2018 10:08:49.446:INFO [launcher]: Launching browsers visibleElectron with concurrency unlimited
29 11 2018 10:08:49.480:INFO [launcher]: Starting browser Electron
29 11 2018 10:08:50.802:INFO [Electron 2.0.14 (Node 8.9.3)]: Connected on socket 3dE5fVoHGFHVFsBXAAAA with id 23010263
~~~

~~~bash
ERROR LOG: '[Vue warn]: Error in data(): "TypeError: Cannot read property 'name' of undefined"

found in

---> <SystemInformation> at src/renderer/components/LandingPage/SystemInformation.vue
       <LandingPage> at src/renderer/components/LandingPage.vue
         <Root>'
~~~

~~~bash
ERROR LOG: TypeError: Cannot read property 'name' of undefined
TypeError: Cannot read property 'name' of undefined
    at a.data (http://localhost:9876/base/index.js?7f08b31b19552640d89a4feacf267a173ca0480d:7:119964)
    at http://localhost:9876/base/index.js?7f08b31b19552640d89a4feacf267a173ca0480d:7:24073
    at http://localhost:9876/base/index.js?7f08b31b19552640d89a4feacf267a173ca0480d:7:24133
    at sn (http://localhost:9876/base/index.js?7f08b31b19552640d89a4feacf267a173ca0480d:7:24581)
    at a.e._init (http://localhost:9876/base/index.js?7f08b31b19552640d89a4feacf267a173ca0480d:7:38198)
    at new a (http://localhost:9876/base/index.js?7f08b31b19552640d89a4feacf267a173ca0480d:7:35494)
    at http://localhost:9876/base/index.js?7f08b31b19552640d89a4feacf267a173ca0480d:7:29410
    at init (http://localhost:9876/base/index.js?7f08b31b19552640d89a4feacf267a173ca0480d:7:29441)
    at http://localhost:9876/base/index.js?7f08b31b19552640d89a4feacf267a173ca0480d:7:62313
    at h (http://localhost:9876/base/index.js?7f08b31b19552640d89a4feacf267a173ca0480d:7:62580)
~~~

~~~bash
ERROR LOG: '[Vue warn]: Property or method "path" is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property. See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.

found in

---> <SystemInformation> at src/renderer/components/LandingPage/SystemInformation.vue
       <LandingPage> at src/renderer/components/LandingPage.vue
         <Root>'
~~~

~~~bash
ERROR LOG: '[Vue warn]: Property or method "name" is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property. See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.

found in

---> <SystemInformation> at src/renderer/components/LandingPage/SystemInformation.vue
       <LandingPage> at src/renderer/components/LandingPage.vue
         <Root>'
~~~

~~~bash
ERROR LOG: '[Vue warn]: Property or method "vue" is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property. See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.

found in

---> <SystemInformation> at src/renderer/components/LandingPage/SystemInformation.vue
       <LandingPage> at src/renderer/components/LandingPage.vue
         <Root>'
~~~

~~~bash
ERROR LOG: '[Vue warn]: Property or method "electron" is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property. See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.

found in

---> <SystemInformation> at src/renderer/components/LandingPage/SystemInformation.vue
       <LandingPage> at src/renderer/components/LandingPage.vue
         <Root>'
~~~

~~~bash
ERROR LOG: '[Vue warn]: Property or method "node" is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property. See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.

found in

---> <SystemInformation> at src/renderer/components/LandingPage/SystemInformation.vue
       <LandingPage> at src/renderer/components/LandingPage.vue
         <Root>'
~~~

~~~bash
ERROR LOG: '[Vue warn]: Property or method "platform" is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property. See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.

found in

---> <SystemInformation> at src/renderer/components/LandingPage/SystemInformation.vue
       <LandingPage> at src/renderer/components/LandingPage.vue
         <Root>'
~~~

~~~bash
  LandingPage.vue
    ✓ should render correct contents

Electron 2.0.14 (Node 8.9.3): Executed 1 of 1 SUCCESS (0.098 secs / 0.017 secs)
TOTAL: 1 SUCCESS


=============================== Coverage summary ===============================
Statements   : 75% ( 12/16 )
Branches     : 100% ( 2/2 )
Functions    : 100% ( 1/1 )
Lines        : 73.33% ( 11/15 )
================================================================================
~~~

## `DeprecationWarning: Tapable.plugin is deprecated. Use new API on `.hooks` instead` の解消

- [webpack/tapable](/hdknr/annotated-js/blob/master/markdown/webpack/tapable.md)
- `npm i -D karma-webpack@next` で解決

## ERROR LOG の解消

- [this.$route == null がある](https://github.com/hdknr/annotated-js/commit/98d010f0aa97e05f6111b76fa3470a862fab31c1) ので、チェックすればエラーが消える

## 更新

~~~bash 
$ npm run unit

> helloev@0.0.1 unit /Users/hide/Documents/Tech/annotated-js/samples/HelloElectronVue
> karma start test/unit/karma.conf.js

⚠ ｢wdm｣: Hash: feb6a5b9127b9051b9f6
Version: webpack 4.26.1
Time: 3601ms
Built at: 2018-11-29 11:32:04
                               Asset       Size  Chunks             Chunk Names
1a284bf4da9436fd15cb.hot-update.json   35 bytes          [emitted]
93ac4810732e228099ce.hot-update.json   44 bytes          [emitted]
               imgs/logo--assets.png   60.4 KiB          [emitted]
                          index.html  458 bytes          [emitted]
                            index.js   1.26 MiB       0  [emitted]  index
Entrypoint index = index.js
 [0] ./node_modules/vue/dist/vue.esm.js 286 KiB {0} [built]
 [2] ./src/renderer/components/LandingPage/SystemInformation.vue?vue&type=template&id=7dd5a73e&scoped=true& + 1 modules 1.97 KiB {0} [built]
     | ./src/renderer/components/LandingPage/SystemInformation.vue?vue&type=template&id=7dd5a73e&scoped=true& 239 bytes [built]
     | ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/renderer/components/LandingPage/SystemInformation.vue?vue&type=template&id=7dd5a73e&scoped=true& 1.73KiB [built]
 [3] ./src/renderer/components/LandingPage.vue?vue&type=template&id=17cac930& + 1 modules 2.64 KiB {0} [built]
     | ./src/renderer/components/LandingPage.vue?vue&type=template&id=17cac930& 215 bytes [built]
     | ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/renderer/components/LandingPage.vue?vue&type=template&id=17cac930& 2.43 KiB [built]
 [5] ./src/renderer/store/modules/index.js 3.41 KiB {0} [built]
 [7] ./src/renderer/components/LandingPage.vue 1.19 KiB {0} [built]
 [8] ./src/renderer/router/index.js 1.58 KiB {0} [optional] [built]
 [9] ./src/renderer/store/index.js 1.7 KiB {0} [optional] [built]
[20] ./src/renderer/components/LandingPage/SystemInformation.vue 1.29 KiB {0} [built]
[27] ./src/renderer/store/modules/Counter.js 2.36 KiB {0} [optional] [built]
[29] ./src/renderer/assets/logo.png 67 bytes {0} [built]
[31] ./src/renderer/App.vue 1.13 KiB {0} [optional] [built]
[34] ./test/unit/index.js 504 bytes {0} [built]
[35] ./test/unit/specs sync \.spec$ 183 bytes {0} [built]
[36] ./test/unit/specs/LandingPage.spec.js 628 bytes {0} [optional] [built]
[40] ./src/renderer sync ^\.\/(?!main(\.js)?$) 653 bytes {0} [built]
    + 61 hidden modules

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/concepts/mode/
Child html-webpack-plugin for "index.html":
                                   Asset      Size  Chunks             Chunk Names
    93ac4810732e228099ce.hot-update.json  44 bytes          [emitted]
                              index.html   556 KiB       1
    Entrypoint undefined = index.html
    [0] ./node_modules/html-webpack-plugin/lib/loader.js!./src/index.ejs 1.14 KiB {1} [built]
    [1] ./node_modules/lodash/lodash.js 527 KiB {1} [built]
    [2] (webpack)/buildin/module.js 519 bytes {1} [built]
ℹ ｢wdm｣: Compiled with warnings.
29 11 2018 11:32:04.175:INFO [karma-server]: Karma v3.1.1 server started at http://0.0.0.0:9876/
29 11 2018 11:32:04.176:INFO [launcher]: Launching browsers visibleElectron with concurrency unlimited
29 11 2018 11:32:04.246:INFO [launcher]: Starting browser Electron
29 11 2018 11:32:06.010:INFO [Electron 2.0.14 (Node 8.9.3)]: Connected on socket FCTkTJYq1DcDV9qqAAAA with id 40955811

  LandingPage.vue
    ✓ should render correct contents

Electron 2.0.14 (Node 8.9.3): Executed 1 of 1 SUCCESS (0.02 secs / 0.01 secs)
TOTAL: 1 SUCCESS


=============================== Coverage summary ===============================
Statements   : 75% ( 12/16 )
Branches     : 66.67% ( 4/6 )
Functions    : 100% ( 1/1 )
Lines        : 73.33% ( 11/15 )
================================================================================
~~~