<template>
<div class="player-list">
  <div v-for="player of players" v-bind:key="player.name">
    <span><p>{{ player.name }}</p></span>
  </div>
</div>
</template>

<script>
// import api from '@/api.js';

export default {
  computed: {
    players: function() {
      return this.$store.state.playerList;
    }
  },
}
</script>

<style>
/* .player-list {
  height: 100vh;
} */
</style>