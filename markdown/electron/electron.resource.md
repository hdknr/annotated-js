# リソース

## `Not allowed to load local resource: file:` 

- [Not allowed to load local resource: file://index.html/ after webpacking main.js · Issue #5107 · electron/electron](https://github.com/electron/electron/issues/5107)
- [typescript+webpackでelectronアプリを開発する際の注意点 | deezus blog](https://blog.deezus.net/archives/127)
- [Not allowed to load local resource · Issue #13528 · electron/electron](https://github.com/electron/electron/issues/13528)

~~~js
new BrowserWindow({
  webPreferences: {
    webSecurity: false
  }
});
~~~