<template>
  <v-container>
    <v-row dense>
      <v-col v-for="list in lists" :key="list.ListName" :col="list.flex">
        <v-card>
          <v-card-title>{{list.ListName}}</v-card-title>
          <v-card-actions>
            <v-btn color="primary" text>Share</v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>
          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-list v-for="product in list.product" :key="product">
                {{product.productName}}:
                <v-text v-for="price in product.productPrice" :key="price">{{price.price}}€</v-text>
              </v-list>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

const baseUrl = "http://localhost:5000/lists/";

export default {
  name: "ListComponent",
  data() {
    return {
      lists: [],
      show: false
    };
  },
  async created() {
    try {
      const res = await axios.get(baseUrl);

      this.lists = res.data;
    } catch (err) {
      console.error(err);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
