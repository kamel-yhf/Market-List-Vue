<template>
  <v-container>
    <v-row>
      <v-col v-for="list in lists" :key="list._id">
        <v-card class="mx-auto" max-width="344">
          <v-card-title>{{list.ListName}}</v-card-title>
          <v-card-actions>
            <v-btn color="primary" text>Share</v-btn>
            <router-link :to="'/update-list/' + list._id">
              <v-btn color="orange" text>Update</v-btn>
            </router-link>
            <v-btn @click="deleteList(list._id)" color="red" text>delete</v-btn>
            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>
          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-list v-for="product in list.product" :key="product._id">{{product.productName}}</v-list>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import ListService from "../ListService";
import UserService from "../UserService";

export default {
  name: "ListComponent",
  data() {
    return {
      lists: [
        {
          id: Number,
        },
      ],
      show: false,
      notShow: true,
      id: this.$route.params.id,
    };
  },
  async created() {
    try {
      //console.log(this.lists);
      //this.lists = await ListService.getLists();
      UserService.getOneUser(localStorage.getItem("id")).then((user) => {
        this.lists = user.data.lists;
      });
    } catch (err) {
      console.error(err);
    }
  },
  methods: {
    deleteList() {
      try {
        UserService.getOneUser(localStorage.getItem("id")).then((user) => {
          let obj_id = user.data.lists._id;
          let invalidElements = 0;
            console.log(invalidElements);
          if (obj_id !== undefined) {
            return true;
          } else {
             invalidElements = invalidElements++;
            return false;
          }
        });
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
