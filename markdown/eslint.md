# ESLint

- [Configuring ESLint - ESLint - Pluggable JavaScript linter](https://eslint.org/docs/user-guide/configuring)

## VS Code

 [Configuring ESLint - ESLint - Pluggable JavaScript linter](https://eslint.org/docs/user-guide/configuring)

.vscode/settings.json:

~~~json
{
    "jshint.enable": false,
    "eslint.enable": true,
}
~~~

~~~
[jshint] 'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6'). (W119) [W119]
~~~

~~~json
{
  "jshint.options": {
    "esversion": 6
  }
}
~~~

## 記事

- [Step by Stepで始めるESLint - Qiita](https://qiita.com/howdy39/items/6e2c75861bc5a14b2acf)
- [javascript - arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6') - Stack Overflow](https://stackoverflow.com/questions/42866159/arrow-function-syntax-is-only-available-in-es6-use-esversion-6)
- [ESLint - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
