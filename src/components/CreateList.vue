<template>
  <v-container>
      <input v-model="List.ListName" placeholder="Name" />
      <v-btn color="success" v-on:click="createList()">ADD List</v-btn>
    <div v-for="product in products" :key="product._id">
      <input type="checkbox" :value="{productName:product.productName}" v-model="List.product" />
      <label for="product">{{product.productName}}</label>
      <br />
    </div>
    <span>Produits cochés : {{ List }}</span>
  </v-container>
</template>

<script>
import ProductService from "../ProductService";
import ListService from "../ListService";

export default {
  data() {
    return {
      products: [],
      List: {
        ListName: "",
        product: []
      }
    };
  },
  async created() {
    try {
      console.log(this.products);
      this.products = await ProductService.getProducts();
    } catch (err) {
      console.error(err);
    }
  },
  methods: {
    createList() {
      console.log(this.List);
      ListService.createList(this.List);
    }
  }
};
</script>

<style>
</style>