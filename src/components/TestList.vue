<template>
  <v-container>
      <button type="text" v-on:click="div"> + </button>
    <div v-for="list in ListTest" :key="list.id">
      <h1>{{list.listName}}</h1>
      <div v-for="product in list.product" :key="product.id" class="add-product">
        <input v-model="product.productName" />
        <div v-for="price in product.price" :key="price.id">
          <input v-model="price.price" />
        </div>
      </div>
    </div>
    
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      ListTest: [
        {
          listName: "List n°1",
          product: [
            {
              productName: "Eau",
              price: [
                {
                  price: 10.99
                }
              ]
            },
            {
              productName: "Chips",
              price: [
                {
                  price: 20.99
                }
              ]
            }
          ]
        },
        {
          listName: "List n°2",
          product: [
            {
              productName: "Bière",
              price: [
                {
                  price: 10.99
                }
              ]
            },
            {
              productName: "Fraise",
              price: [
                {
                  price: 20.99
                }
              ]
            }
          ]
        }
      ],
      div: '<div v-for="list in ListTest" :key="list.id"><h1>{{list.listName}}</h1><button @click="addProduct">Add</button><div v-for="product in list.product" :key="product.id" class="add-product"><input v-model="product.productName" /><div v-for="price in product.price" :key="price.id"><input v-model="price.price" /></div></div></div>'
    };
  },
  methods: {
    addProduct() {
    }
  }
};
</script>

<style>
</style>