<template>
  <v-container>
<!--create product-->
    <div>
      <label for="create-product">new products</label> <br>
      <input type="text" v-model="newProduct.productName" placeholder="productName">
      <input type="text" v-model="newProduct.productPrice">
      <v-btn v-on:click="createProduct" color="success">ADD</v-btn>
    </div>
<br><br>
    <table>
      <tr>
        <th>Products</th>
        <th>Price</th>
      </tr>
      <tr v-for="product in products" :key="product._id">
        <td>{{product.productName}}</td>
        <td>{{product.productPrice}}</td>
        <td><v-btn @click="deleteProduct(product._id)" color="red" text>delete</v-btn></td>
      </tr>
    </table>
  </v-container>
</template>

<script>
import ProductService from "../ProductService";

export default {
  name: "ProductComponent",
  data() {
    return {
      products: [],
      show: false,
      newProduct: {
        productName: '',
        productPrice: 0
      }
    };
  },
  async created() {
    try {
      this.products = await ProductService.getProducts();
    } catch (err) {
      console.error(err);
    }
  },
  methods:{
    createProduct(){
      ProductService.createProduct(this.newProduct);
      this.products = ProductService.getProducts();
    },
    deleteProduct(id) {
      ProductService.deleteProduct(id);
      this.products = ProductService.getProducts();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
