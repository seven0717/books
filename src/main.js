import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios';
Vue.prototype.axios = Axios;
Vue.prototype.api = '/baidu_music_api'
import store from './store/store.js';
// 引入elementUI
import { Button, Row,Col,Input,Container,Header,Main,Footer,Carousel,CarouselItem } from 'element-ui';
require('./api/index.js');
require('./axios/index.js');
Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Row)
Vue.use(Col)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Carousel)
Vue.use(CarouselItem)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
