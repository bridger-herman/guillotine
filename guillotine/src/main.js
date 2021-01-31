import { createApp } from 'vue';
import App from './App.vue'
import Vuex from 'vuex'

const store = new Vuex.Store({
  state: {
    playerName: '',
    playerList: [],
    actionCards: [],
  },
  mutations: {
    setPlayerName(state, name) {
      state.playerName = name;
    },
    setPlayerList(state, list) {
      state.playerList = list;
    },
    setActionCards(state, list) {
      state.actionCards = list;
    }
  }
})

createApp(App).use(store).mount('#app')