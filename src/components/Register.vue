<template>
  <div>
    <label>Nom:</label>
    <input type="text" id="name" v-model="User.userName" />
    <br />
    <label>Age:</label>
    <input type="text" id="age" v-model="User.age" />
    <br />
    <label>Email:</label>
    <input type="email" id="email" v-model="User.email" />
    <br />
    <label>Phone:</label>
    <input type="text" id="phone" v-model="User.phone" />
    <br />
    <label>Adresse:</label>
    <input type="text" id="adresse" v-model="User.address" />
    <br />
    <label>Password:</label>
    <input type="text" id="password" v-model="User.password" />
    <br />
    <button @click="createUser">REGISTER</button>

    <span>{{users}}</span>
  </div>
</template>

<script>
import UserService from "../UserService";

export default {
  data() {
    return {
      users: [],
      User: {
        userName: "",
        age: "",
        email: "",
        phone: "",
        address: "",
        password: "",
      },
    };
  },
  methods: {
    createUser() {
      UserService.createUser(this.User);
      this.users = UserService.getUsers();
    },
  },
};
</script>

<style>
</style>