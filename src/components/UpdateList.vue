<template>
  <v-container>
    <h1>Modifier liste</h1>
    <label>Entrez un nom:</label>
    <br />
    <h2 id="name">{{list.ListName}}</h2>
    <br />
    <label for="product">Product:</label>
    <br />
    <ul v-for="product in list.product" :key="product._id">
      <li>
        <input type="text" v-model="product.productName" />
      </li>
    </ul>
    <button @click="addItem">ADD</button>
    <br />
    <button type="submit" @click="updateList">Save</button>
  </v-container>
</template>

<script>
import axios from "axios";
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
    };
  },
  created() {
    this.getOne(this.id);
  },
  mounted() {
    /*ProductService.getProducts().then(product => {
      this.list.product = product;
    });*/
  },
  methods: {
    getOne() {
      axios
        .get(`http://localhost:5000/lists/${this.id}`)
        .then((result) => {
          this.list = result.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateList() {
      let data = {
        list: {
          ListName: this.list.ListName,
          product: [...this.list.product],
        },
      };
      console.log(this.list);
      console.log(data);
      ListService.updateList(this.id, this.list)
        .then((response) => {
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    addItem() {
      this.list.product.push({
        productName: ''
      });
    }
  },
};
</script>
