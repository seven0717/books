import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    token:'1'
  },
  mutations:{
    'LOGIN':(state,data) =>{
      state.token = data
    }
  }
})
