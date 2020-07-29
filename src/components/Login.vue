<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-row>
          <v-card width="500" class="mx-auto mt-5">
            <v-card-title class="pb-0">
              <h1>Login</h1>
            </v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field label="Email" v-model="email" prepend-icon="mdi-account-circle" />
                <v-text-field
                  :type="showPassword ? 'text' : 'password'"
                  label="Password"
                  v-model="password"
                  prepend-icon="mdi-lock"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPassword = !showPassword"
                />
                <div
                  v-show="submitted && !password"
                  class="invalid-feedback"
                >Password or Email is required</div>
              </v-form>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <router-link :to="'/register'">
                <v-btn color="success">Register</v-btn>
              </router-link>
              <v-spacer></v-spacer>
              <v-btn v-on:click="auth" color="info">Login</v-btn>
            </v-card-actions>
          </v-card>
          <p v-if="msg">{{ msg }}</p>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UserService from "../UserService";
export default {
  name: "Login",
  data() {
    return {
      showPassword: false,
      email: "",
      password: "",
      msg: "",
      submitted: false,
    };
  },
  methods: {
    auth() {
      if (this.email != "" && this.password != "") {
        const User = {
          email: this.email,
          password: this.password,
        };
        UserService.loginUser(User)
          .then((res) => {
            localStorage.email = res.user.email;
            localStorage.userName = res.user.userName;
            localStorage.id = res.user._id;
            this.msg = "Vous êtes connectez avec succès";
            setTimeout(() => {
              this.$router.replace({ name: "Lists" });
              this.$emit("authenticated", true);
            }, 3000);
          })
          .catch(() => {
            this.msg = "Une erreur est survenus";
            console.log(this.msg);
          });
      }
    },
  },
};
</script>