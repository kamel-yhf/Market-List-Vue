<template>
  <v-container>
    <v-row>
      <v-col v-for="list in lists" :key="list._id" cols="12">
        <v-card>
          <v-card-title>{{list.ListName}}</v-card-title>
          <v-card-actions>
            <v-btn color="primary" text>Share</v-btn>
            <v-btn color="orange" text>update</v-btn>
            <v-btn @click="deleteList(list._id)" v-on:click="msg" color="red" text>delete</v-btn>
            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>
          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-list v-for="product in list.product" :key="product._id">
                {{product.productName}}
              </v-list>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ListService from "../ListService";

export default {
  name: "ListComponent",
  data() {
    return {
      lists: [],
      show: false
    };
  },
  async created() {
    try {
      console.log(this.lists);
      this.lists = await ListService.getLists();
    } catch (err) {
      console.error(err);
    }
  },
  methods: {
    async deleteList(id) {
      await ListService.deletelist(id);
      this.lists = await ListService.getLists();
    },
    msg: function(){
      alert(' Liste Supprimée');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
