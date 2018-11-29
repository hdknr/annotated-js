# テスト

## electron-vue

- [electron-vue/testing.md at master · SimulatedGREG/electron-vue](https://github.com/SimulatedGREG/electron-vue/blob/master/docs/ja/testing.md)


## ERROR LOG: '[Vue warn]: Error in render: "TypeError: Cannot read property 'matched' of undefined"

~~~bash
found in

---> <LandingPage> at src/renderer/components/LandingPage.vue
       <Root>'
ERROR LOG: TypeError: Cannot read property 'matched' of undefined
TypeError: Cannot read property 'matched' of undefined
    at render (http://localhost:9876/base/index.js?f88434afda92e0c1a0c0b6df367e37c7a360fe8f:5205:25)
~~~

- [vue.jsとvue-routeを組み合わせてテストする際はまったこと - Qiita](https://qiita.com/souko2525/items/18f82e5f9897c507d990)

~~~js
import Vue from 'vue'
import LandingPage from '@/components/LandingPage'
import router from '@/router'               // 追加
import store from '@/store'                 // 追加

describe('LandingPage.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      router, store,                        // 追加
      render: h => h(LandingPage)
    }).$mount()

    expect(vm.$el.querySelector('.title').textContent).to.contain('Welcome to your new project!')
  })
})
~~~

## エラー

- [Uncaught TypeError: Cannot read property 'matched' of undefined · Issue #976 · vuejs/vue-router](https://github.com/vuejs/vue-router/issues/976)
