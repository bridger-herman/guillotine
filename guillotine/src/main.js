import { createApp } from 'vue';
import App from './App.vue'
import Vuex from 'vuex'

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

createApp(App).use(store).mount('#app')