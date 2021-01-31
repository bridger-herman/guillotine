<template>
  <PlayerList/>
  <ActionHand/>
</template>

<script>
import api from '@/api.js';
import PlayerList from './components/PlayerList.vue';
import ActionHand from './components/ActionHand.vue'

export default {
  name: 'App',
  components: {
    PlayerList, ActionHand
  },
  data() {
    return {
      playerName: 'Bridger',
    }
  },
  mounted: function() {
    // api.createPlayer({
    //   name: this.playerName,
    // }).finally(() => {
      this.$store.commit('setPlayerName', this.playerName);
      api.getPlayers().then((players) => {
        this.$store.commit('setPlayerList', players)
      });
    // });
    api.getActionCards().then((cards) => {
      this.$store.commit('setActionCards', cards);
    });
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: grid;
  grid-template-columns: 10rem auto;
}

p {
  width: min-content;
}
</style>
