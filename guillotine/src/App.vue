<template>
  <div id="app">
    <PlayerList/>
    <ActionHand/>
  </div>
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
    api.createPlayer({
      name: 'Bridger',
    });
    this.$store.commit('setPlayerName', this.playerName);
    // api.createPlayer({
    //   name: 'Bridger',
    // }).then(() => {
      // api.getPlayers().then((players) => {
      //   this.$store.commit('setPlayerList', players)
      //   console.log(this.$store.state.playerList);
      // });
    // });
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
}
</style>
