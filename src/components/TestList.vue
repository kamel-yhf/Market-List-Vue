<template>
  <v-container>
    <input v-model="listName" placeholder="new list" />
    <p>list is: {{ listName }}</p>
    <div v-for="product in products" :key="product._id">
      <input type="checkbox" :value="product" v-model="lists" />
      <label for="product">{{product.productName}}</label>
      <br />
    </div>
    <span>Noms cochés : {{ lists }}</span>
  </v-container>
</template>

<script>
import ProductService from "../ProductService";
export default {
  data() {
    return {
      lists: [],
      products: [],
      listName: ""
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

<style>
</style>