<template>
  <div>
    <label>Nom:</label>
    <input type="text" id="name" v-model="user.userName" />
    <br />
    <label>Age:</label>
    <input type="text" id="age" v-model="user.age" />
    <br />
    <label>Email:</label>
    <input type="email" id="email" v-model="user.email" />
    <br />
    <label>Phone:</label>
    <input type="text" id="phone" v-model="user.phone" />
    <br />
    <label>Adresse:</label>
    <input type="text" id="adresse" v-model="user.address" />
    <br />
    <label>Password:</label>
    <input type="text" id="password" v-model="user.password" />
    <br />
    <button @click="updateUser">update</button>

    <!-- <span>{{user}}</span> -->
  </div>
</template>

<script>
import axios from "axios";
import UserService from "../UserService";

export default {
  name: "UpdateList",
  data() {
    return {
      user: {
        userName: "",
        age: "",
        email: "",
        password: "",
        phone: "",
        address: "",
      },
      id: this.$route.params.id,
    };
  },
  created() {
    this.getOne(this.id);
  },
  methods: {
    getOne() {
      axios
        .get(`http://localhost:5000/users/${this.id}`)
        .then((result) => {
          this.user = result.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateUser() {
      let data = {
        user: {
          userName: this.user.userName,
          age: this.user.age,
          email: this.user.email,
          password: this.user.password,
          phone: this.user.phone,
          address: this.user.address,
        },
      };
      console.log(this.user);
      console.log(data);
      UserService.updateUser(this.id, this.user)
        .then((response) => {
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style>
</style>