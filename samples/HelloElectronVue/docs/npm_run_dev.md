~~~bash
$ npm run dev

> helloev@0.0.1 dev /Users/hide/Documents/Tech/annotated-js/samples/HelloElectronVue
> node .electron-vue/dev-runner.js

         ___                      __
   __   /\_ \       __     ___   /\ \__    _ __    ___     ___              __  __  __  __     __
 / ,.`\ \//\ \    / ,.`\  /'___\ \ \ ,_\  /\` __\ / __`\ /' _ `\   _______ /\ \/\ \/\ \/\ \  / ,.`\
/\  __/   \_\ \_ /\  __/ /\ \__/  \ \ \/  \ \ \/ /\ \_\ \/\ \/\ \ /\______\\ \ \/ |\ \ \_\ \/\  __/
\ \____\  /\____\\ \____\\ \____\  \ \ \_  \ \_\ \ \____/\ \_\ \_\\/______/ \ \___/ \ \____/\ \____\
 \/____/  \/____/ \/____/ \/____/   \ \__\  \/_/  \/___/  \/_/\/_/           \/__/   \/___/  \/____/
                                     \/__/
  getting ready...

┏ Main Process ---------------

  compiling...

┗ ----------------------------

┏ Renderer Process -----------

  Hash: ae5b5c0cca8334b6f97c
  Version: webpack 4.26.0
  Time: 3390ms
  Built at: 2018-11-22 10:47:45
                  Asset       Size    Chunks             Chunk Names
  imgs/logo--assets.png   60.4 KiB            [emitted]
             index.html  444 bytes            [emitted]
            renderer.js   1.15 MiB  renderer  [emitted]  renderer
  Entrypoint renderer = renderer.js
  [0] multi ./.electron-vue/dev-client ./src/renderer/main.js 40 bytes {renderer} [built]
  [./.electron-vue/dev-client.js] 731 bytes {renderer} [built]
  [./node_modules/strip-ansi/index.js] 161 bytes {renderer} [built]
  [./node_modules/vue-hot-reload-api/dist/index.js] 6.13 KiB {renderer} [built]
  [./node_modules/vue-loader/lib/runtime/componentNormalizer.js] 2.63 KiB {renderer} [built]
  [./node_modules/vue/dist/vue.esm.js] 286 KiB {renderer} [built]
  [./node_modules/webpack-hot-middleware/client-overlay.js] (webpack)-hot-middleware/client-overlay.js 2.16 KiB {renderer} [built]
  [./node_modules/webpack-hot-middleware/client.js?noInfo=true&reload=true] (webpack)-hot-middleware/client.js?noInfo=true&reload=true 7.59 KiB {renderer} [built]
  [./node_modules/webpack-hot-middleware/process-update.js] (webpack)-hot-middleware/process-update.js 4.26 KiB {renderer} [built]
  [./src/renderer/App.vue] 1.13 KiB {renderer} [built]
  [./src/renderer/main.js] 382 bytes {renderer} [built]
  [./src/renderer/router/index.js] 264 bytes {renderer} [built]
  [./src/renderer/store/index.js] 342 bytes {renderer} [built]
  [axios] external "axios" 42 bytes {renderer} [built]
  [vue-electron] external "vue-electron" 42 bytes {renderer} [built]
      + 43 hidden modules
  Child html-webpack-plugin for "index.html":
           Asset      Size  Chunks  Chunk Names
      index.html  1.38 MiB       0
      Entrypoint undefined = index.html
      [./node_modules/html-webpack-plugin/lib/loader.js!./src/index.ejs] 1.14 KiB {0} [built]
      [./node_modules/lodash/lodash.js] 527 KiB {0} [built]
      [./node_modules/webpack/buildin/module.js] (webpack)/buildin/module.js 497 bytes {0} [built]

┗ ----------------------------

┏ Main Process ---------------

  Hash: 7a1b03d3b9b93aa7d128
  Version: webpack 4.26.0
  Time: 3987ms
  Built at: 2018-11-22 10:47:46
    Asset     Size  Chunks             Chunk Names
  main.js  211 KiB    main  [emitted]  main
  Entrypoint main = main.js
  [0] multi ./src/main/index.dev.js ./src/main/index.js 40 bytes {main} [built]
  [./node_modules/cross-unzip/index.js] 1.49 KiB {main} [built]
  [./node_modules/electron-debug sync recursive] ./node_modules/electron-debug sync 160 bytes {main} [built]
  [./node_modules/electron-debug/index.js] 2.46 KiB {main} [built]
  [./node_modules/electron-devtools-installer/dist/downloadChromeExtension.js] 2.26 KiB {main} [built]
  [./node_modules/electron-devtools-installer/dist/index.js] 5.02 KiB {main} [built]
  [./node_modules/electron-devtools-installer/dist/utils.js] 1.88 KiB {main} [built]
  [./node_modules/electron-is-dev/index.js] 256 bytes {main} [built]
  [./node_modules/electron-localshortcut/index.js] 8.16 KiB {main} [built]
  [./node_modules/semver/semver.js] 37.1 KiB {main} [built]
  [./src/main/index.dev.js] 364 bytes {main} [built]
  [./src/main/index.js] 801 bytes {main} [built]
  [electron] external "electron" 42 bytes {main} [built]
  [fs] external "fs" 42 bytes {main} [built]
  [path] external "path" 42 bytes {main} [built]
      + 33 hidden modules

  WARNING in ./node_modules/electron-debug/index.js 81:45-58
  Critical dependency: the request of a dependency is an expression
   @ ./src/main/index.dev.js
   @ multi ./src/main/index.dev.js ./src/main/index.js

  WARNING in ./node_modules/electron-debug/index.js 84:85-106
  Critical dependency: the request of a dependency is an expression
   @ ./src/main/index.dev.js
   @ multi ./src/main/index.dev.js ./src/main/index.js

┗ ----------------------------

┏ Electron -------------------

  Debugger listening on ws://127.0.0.1:5858/265021a3-73ac-47cb-a0a9-0eb72429d347
  For help see https://nodejs.org/en/docs/inspector

┗ ----------------------------
~~~