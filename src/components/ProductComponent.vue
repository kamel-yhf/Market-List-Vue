<template>
  <v-container>
    <!--create product-->
    <div>
      <label for="create-product">new products</label>
      <br />
      <input type="text" v-model="newProduct.productName" placeholder="productName" />
      <input type="number" v-model="newProduct.productPrice" />
      <a href="/product">
        <v-btn v-on:click="createProduct" @click="msg('Produit Ajouté')" color="success">ADD</v-btn>
      </a>
    </div>
    <br />
    <br />
    <table>
      <tr>
        <th>Products</th>
        <th>Price</th>
      </tr>
      <tr v-for="product in products" :key="product._id">
        <td>{{product.productName}}</td>
        <td>{{product.productPrice}}</td>
        <td>
          <a href="/product">
            <v-btn @click="deleteProduct(product._id)" v-on:click="msg('Produit Supprimé')" color="red" text>delete</v-btn>
          </a>
        </td>
        <td>
          <v-btn @click="display = !display; productToUpdate = product" color="orange" text>update</v-btn>
        </td>
      </tr>
    </table>
    <br />
    <div v-if="display" :value="productToUpdate">
      <label for="create-product">update products</label>
      <br />
      <input type="text" v-model="productToUpdate.productName" placeholder="productName" />
      <input type="number" v-model="productToUpdate.productPrice" />
      <a href="/product">
        <v-btn @click="updateProduct(productToUpdate._id)" v-on:click="msg('Produit Modifié')" color="red">Modifer</v-btn>
      </a>
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
        productName: "",
        productPrice: 0
      },
      display: false,
      productToUpdate: {
        productName: "",
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
  methods: {
    createProduct() {
      ProductService.createProduct(this.newProduct);
      this.products = ProductService.getProducts();
    },
    deleteProduct(id) {
      ProductService.deleteProduct(id);
      this.products = ProductService.getProducts();
    },
    updateProduct(id) {
      ProductService.updateProduct(id, this.productToUpdate);
      this.products = ProductService.getProducts();
    },
    msg: function(message){
      alert(message);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
}
</style>
