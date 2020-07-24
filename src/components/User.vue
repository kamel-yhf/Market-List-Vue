<template>
  <v-simple-table>
    <thead>
      <tr>
        <th class="text-left">Nom</th>
        <th class="text-left">Age</th>
        <th class="text-left">Email</th>
        <th class="text-left">Phone</th>
        <th class="text-left">Adresse</th>
        <th class="text-left">Password</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user._id">
        <td>{{user.userName}}</td>
        <td>{{user.age}}</td>
        <td>{{user.email}}</td>
        <td>{{user.phone}}</td>
        <td>{{user.address}}</td>
        <td>{{user.password}}</td>
        <td>
          <v-btn
            @click="deleteUser(user._id)"
            v-on:click="msg('User Supprimé')"
            color="red"
            text
          >delete</v-btn>
        </td>
      </tr>
    </tbody>
  </v-simple-table>
</template>

<script>
import UserService from "../UserService";

export default {
  data() {
    return {
      users: [],
    };
  },
  async created() {
    try {
      this.users = await UserService.getUsers();
    } catch (err) {
      console.error(err);
    }
  },
  methods:{
    deleteUser(id){
      UserService.deleteUser(id);
      this.users = UserService.getUsers();
    }
  }
};
</script>

<style>
</style>