<template>
  <v-container>
    <v-row>
      <v-col v-for="market in markets" :key="market._id">
        <v-card class="mx-auto" max-width="344">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.pixabay.com/photo/2017/01/26/16/51/supermarket-2011060_1280.png"
          >
            <v-card-title class="primary">{{market.marketName}}</v-card-title>
          </v-img>
          <v-card-subtitle>{{market.address}}</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MarketService from "../MarketService";

export default {
  data() {
    return {
      markets: [],
    };
  },
  async created() {
    try {
      console.log(this.markets);
      this.markets = await MarketService.getMarkets();
    } catch (err) {
      console.error(err);
    }
  },
};
</script>

<style>
</style>