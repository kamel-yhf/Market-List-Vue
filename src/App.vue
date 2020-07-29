<template>
  <v-app id="inspire">
    <v-navigation-drawer  v-if="authenticated" v-model="drawer" app>
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-format-list-bulleted</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <router-link to="/lists">Lists</router-link>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-pen</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <router-link to="/new-list">New List</router-link>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-food</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <router-link to="/product">Products</router-link>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-store</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <router-link to="/market">Market</router-link>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-login</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <router-link
              v-if="authenticated"
              to="/login"
              v-on:click.native="logout()"
              replace
            >Logout</router-link>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Market List</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view @authenticated="setAuthenticated" />
    </v-main>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
    authenticated: false,
  }),
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
      localStorage.removeItem('email');
      localStorage.removeItem('userName');
      localStorage.removeItem('id');
    },
  },
};
</script>