# mocha

- Testing Framework: https://mochajs.org/

## 例:

~~~js
describe('Simple', () => {
  it('Hello', () => {
    const flag = true
    expect(flag).equal(true)
  })
})
~~~

## Promiseを返す関数を async/await でテスト

~~~js
import keytar from 'keytar'

export function load () {
  // return Promise
  return keytar.getPassword(SERVICE, USER)
}
~~~

~~~js
import {load} from '@/../main/credentials.js'

describe('Credential', () => {
  it('Load', async () => {
    const cred = await load()
    expect(cred).equal(null)
  })
})
~~~

## 記事

- [mocha における describe it before beforeEach after afterEach の実行順序 - Qiita](https://qiita.com/sta/items/2c89af1e05202fb76b96)
- [Node.js v7.6.0から使えるasync awaitをmochaでやってみた - Qiita](https://qiita.com/daijinload/items/a031eca2d40d1bebaaba)
