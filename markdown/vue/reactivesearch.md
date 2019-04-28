# Reactivesearch

- [Vue.JS Components for building Search UIs – All things #datastreams](https://medium.appbase.io/vue-js-components-for-building-search-uis-7b2a1b6fe159)
- [Reactivesearch - React and React Native UI components for Elasticsearch](https://opensource.appbase.io/reactivesearch/?ref=producthunt)

## ReactiveSearch Quickstart

- https://github.com/appbaseio/reactivesearch/tree/dev/packages/vue
- [ReactiveSearch Quickstart](https://opensource.appbase.io/reactive-manual/vue/getting-started/reactivesearch.html)

~~~bash
vue create my-awesome-search && cd my-awesome-search
npm install @appbaseio/reactivesearch-vue
~~~

~~~js
import Vue from 'vue'
import ReactiveSearch from '@appbaseio/reactivesearch-vue'
import App from './App'
Vue.config.productionTip = false

Vue.use(ReactiveSearch)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
~~~
