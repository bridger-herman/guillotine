<template>
  <div id="app">
    <ul class="player-list" v-for="player of players" v-bind:key="player.name">
      <li><p>{{ player.name }}</p></li>
    </ul>
  </div>
</template>

<script>
import api from './api.js';

export default {
  name: 'App',
  components: {
  },
  asyncComputed: {
    players: function() {
      return api.getPlayers();
    }
  },
  data() {
    return {
      playerName: 'Bridger',
    }
  },
  mounted: function() {
    // api.createPlayer({
    //   name: 'Bridger',
    // }).then(() => {
    //   console.log(this.players);
    //   // api.getPlayers().then((players) => console.log(players));
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
