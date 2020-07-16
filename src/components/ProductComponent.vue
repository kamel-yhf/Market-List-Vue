<template>
  <v-container>
    <v-row>
      <v-col v-for="product in products" :key="product._id" cols="12">
        <v-card>
          <v-card-title>{{product.productName}}</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProductService from "../ProductService";

export default {
  name: "ProductComponent",
  data() {
    return {
      products: [],
      show: false
    };
  },
  async created() {
    try {
      console.log(this.products);
      this.products = await ProductService.getProducts();
    } catch (err) {
      console.error(err);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
