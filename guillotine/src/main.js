import Vue from 'vue'
import App from './App.vue'
import AsyncComputed from 'vue-async-computed'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(AsyncComputed);
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    playerName: '',
    playerList: [],
  },
  mutations: {
    setPlayerName(state, name) {
      state.playerName = name;
    },
    setPlayerList(state, list) {
      console.log('setting player list');
      console.log(list);
      state.playerList = list;
    }
  }
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')