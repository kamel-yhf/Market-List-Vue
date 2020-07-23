<template>
  <v-container>
    <h1>Modifier liste</h1>
    <label>Entrez un nom:</label>
    <br />
    <input type="text" id="name" v-model="list.ListName" />
    <br />
    <label for="product">Product:</label>
    <br />
    <ul>
      <li>
         <input type="text" id="product" v-model="list.product" />
      </li>
    </ul>

    <button type="submit" @click="updateList">Save</button>
    <p>{{message}}</p>

    <!-- <a>Ajoutez des produits</a>
    <div v-for="product in products" :key="product._id">
      <div>
        <input
          type="checkbox"
          :value="{ productName: list.product.productName }"
          v-model="list.product"
        />
        <label for="product"> {{ product.productName }}</label>
        <br />
      </div>
    </div>
    <br />
    <v-btn color="success" v-on:click="createList()">Enregister</v-btn>-->
  </v-container>
</template>

<script>
import ListService from "../ListService";

export default {
  name: "UpdateList",
  data() {
    return {
      list: {
        ListName: "",
        product: [],
      },
      id: this.$route.params.id,
      message: ""
    };
  },
  created() {
    this.getOne(this.$route.params.id);
  },
  methods: {
    getOne(){
      this.list = ListService.getOneList(this.id)
    },
    updateList(){
      let data = {
        list: {
        ListName: this.list.ListName,
        product: this.list.product
      }
      };
      console.log(this.data);
      console.log(data);
      ListService.updateList(this.id, data)
        .then(response => {
          console.log(response.data);
          this.message = "The list updated";
        })
        .catch(e => {
          console.log(e);
        });

    }
    
  },
};
</script>
