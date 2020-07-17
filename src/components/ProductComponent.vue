<template>
  <v-container>
    <table>
      <tr>
        <th>Products</th>
        <th>Price</th>
      </tr>
      <tr v-for="product in products" :key="product._id">
        <td>{{product.productName}}</td>
        <td>{{product.productPrice}}</td>
      </tr>
    </table>

    <!--create product-->
    <div class="create">
      <label for="create-product">new products</label>
      <input type="text" v-model="newProduct.name" placeholder="Name">
      <input type="text" v-model="newProduct.price" placeholder="Price">
      <button v-on:click="createProduct">ADD</button>
    </div>
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
        name: '',
        price: 0
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
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
