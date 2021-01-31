<template>
<div class="action-hand">
  <img class="action-card" v-for="card of actionsHand" v-bind:key="card" v-bind:src="getActionCardUrl(card)">
</div>
</template>

<script>
import api from '@/api.js';

export default {
  computed: {
    player: function() {
      return this.$store.state.playerList.find((p) => p.name == this.$store.state.playerName);
    },
    actionsHand: function() {
      return this.player ? this.player.actionsHand : null;
    }
  },
  mounted: function() {
    console.log(this.$root);
    this.$root.$on('addActionCardFromDeck', () => this.addActionCardFromDeck());
    // this.$root.$refs.ActionHand = this;
  },
  methods: {
    // https://stackoverflow.com/a/47480286
    getActionCardUrl(cardId) {
      let cardName = this.$store.state.actionCards[cardId - 1].imgPath;
      return require('../assets/action_cards/' + cardName);
    },
    addActionCardFromDeck() {
      let maxIndex = 0;
      for (const player of this.$store.state.playerList) {
        let maxOfHand = Math.max(...player.actionsHand);
        maxIndex = maxOfHand > maxIndex ? maxOfHand : maxIndex;
      }
      this.player.actionsHand.push(maxIndex);
      api.updatePlayer(this.player.name, this.player);
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