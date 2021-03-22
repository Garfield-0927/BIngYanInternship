import Vue from 'vue'
import App from './App.vue'

import router from "@/router";
import store from "@/store";
Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')


// 添加事件总线
var EventBus = new Vue();
Object.defineProperties(Vue.prototype,{
  $bus:{
    get: function (){
      return EventBus;
    }
  }
})
