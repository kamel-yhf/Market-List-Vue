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
                 <div v-show="submitted && !password" class="invalid-feedback">Password or Email is required</div>
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
      submitted: false
    };
  },
  created() {
    // reset login status
    UserService.logout();
  },
  methods: {
    auth() {
      this.submitted = true;
      if (this.email != "" && this.password != "") {
        try {
          const User = {
            email: this.email,
            password: this.password,
          };
          const response = UserService.loginUser(User)
            .then((res) => {
              sessionStorage.email = res.user.email;
              sessionStorage.password = res.user.password;
            })
            .catch((err) => {
              console.log(err);
            });
          this.msg = response.msg;
        } catch (error) {
          this.msg = error;
        }
        this.$emit("authenticated", true);
        this.$router.replace({ name: "Lists" });
      } else {
        console.log("A username and password required");
      }
    },
  },
};
</script>