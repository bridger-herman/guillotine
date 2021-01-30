<template>
<div class="action-hand">
  <!-- <div v-for="card of actionCards" v-bind:key="card">
    <img v-bind:src="'@/assets/action_cards/' + card" alt="">
  </div> -->
  <img src="@/assets/action_cards/actionss_set3_2_1.jpg" alt="">
</div>
</template>

<script>
import api from '@/api.js';

export default {
  asyncComputed: {
    actionCards: function() {
      return api.getPlayer(this.$store.state.playerName).then((player) => {
        let cards = player.actionsHand;
        // cards = cards.map((c) => '../assets/action_cards/' + c);
        return cards;
      });
    }
  },
  mounted: function() {

  }
}
</script>

<style>

</style>