# クレデンシャルの保存

## localStroage

- [window.localStorage - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- 再起動したらなくなる

## node-keytar

- https://github.com/atom/node-keytar
- [How to securely store sensitive information in Electron with node-keytar](https://medium.com/cameron-nokes/how-to-securely-store-sensitive-information-in-electron-with-node-keytar-51af99f1cfc4)

OS:

- Windows: [Credential Manager is where Windows stores passwords and login details. Here's how to use it! | Digital Citizen](https://www.digitalcitizen.life/credential-manager-where-windows-stores-passwords-other-login-details)
- macOS: [Keychain (software) - Wikipedia](https://en.wikipedia.org/wiki/Keychain_%28software%29)
- Linux: [GNOME Keyring - Wikipedia](https://en.wikipedia.org/wiki/GNOME_Keyring)

## JSON

- [JSON.stringify() - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
- [ネイティブ JSON を使う | MDN](https://developer.mozilla.org/ja/docs/Using_native_JSON)


## リビルド

- [NODE_MODULE_VERSION 46. This version of Node.js requires NODE_MODULE_VERSION 51. Please try re-compiling or re-installing · Issue #2534 · hexojs/hexo](https://github.com/hexojs/hexo/issues/2534)
- [Using Native Node Modules | Electron](https://electronjs.org/docs/tutorial/using-native-node-modules)

~~~bash 
$ npm install --save-dev electron-rebuild
npm WARN karma-webpack@3.0.5 requires a peer of webpack@^2.0.0 || ^3.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN streetboard@0.0.1 No repository field.
npm WARN streetboard@0.0.1 No license field.

+ electron-rebuild@1.8.2
added 20 packages from 16 contributors in 12.686s
[+] no known vulnerabilities found [18839 packages audited]

$ ./node_modules/.bin/electron-rebuild
✔ Rebuild Complete
~~~

## 記事

- [Electronアプリをリリースするまでにあった知見 - Qiita](https://qiita.com/tsuwatch/items/d53c4bb940ecde7016de)
