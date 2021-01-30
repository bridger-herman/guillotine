<template>
<div class="player-list">
  <ul v-for="player of players" v-bind:key="player.name">
    <li><p>{{ player.name }}</p></li>
  </ul>
</div>
</template>

<script>
import api from '@/api.js';

export default {
  asyncComputed: {
    players: function() {
      return api.getPlayers();
    }
  },
}
</script>

<style>
  .player-list {
    width: 10rem;
  }
</style>