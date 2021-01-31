<template>
<div class="action-hand">
  <img class="action-card" v-for="card of actionCards" v-bind:key="card" v-bind:src="getActionCardUrl(card)">
</div>
</template>

<script>
// import api from '@/api.js';

export default {
  computed: {
    actionCards: function() {
      let player = this.$store.state.playerList.find((p) => p.name == this.$store.state.playerName);
      return player ? player.actionsHand : null;
    }
  },
  mounted: function() {

  },
  methods: {
    // https://stackoverflow.com/a/47480286
    getActionCardUrl(cardId) {
      let cardName = this.$store.state.actionCards[cardId - 1].imgPath;
      return require('../assets/action_cards/' + cardName);
    }
  }
}
</script>

<style>
.action-hand {
  display: flex;
  justify-content: space-around;
}

.action-hand > img.action-card {
  margin: 0.5rem;
  border-radius: 10px;
  width: 18%; /* 1/5 of the width plus a little to spare */
}
</style>