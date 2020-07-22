<template>
  <v-container>
    <h1>Créez votre liste</h1>
    <label>Entrez un nom:</label>
    <v-text-field v-model="List.ListName" :rules="rules"></v-text-field>

    <a @click="display = !display" v-on:click="show = !show">Ajoutez des produits</a>
    <div v-for="product in products" :key="product._id">
      <div v-if="display">
        <input type="checkbox" :value="{productName:product.productName}" v-model="List.product" />
        <label for="product"> {{product.productName}}</label>
        <br />
      </div>
    </div>
    <br />
    <v-btn v-if="display" color="success" v-on:click="createList()" @click="msg">Enregister</v-btn>

    <!-- <span>Produits cochés : {{ List }}</span> -->
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
      },
      display: false,
      show: true,
      rules: [
        value => !!value || "Required.",
        value => (value || "").length <= 20 || "Max 20 characters"
      ]
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
    },
    msg: function(){
      alert('Liste Créée');
    }
  }
};
</script>

<style>
</style>