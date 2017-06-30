<template>
  <nav class="navbar navbar-default">
        <button id="logOut" class="btn" v-show="isLoggedIn" @click="handleLogout()">Log out</button>
        <button id="logIn" class="btn" v-show="!isLoggedIn" @click="handleLogin()">Log In</button>
  </nav>
</template>

<script>
import { isLoggedIn, login, logout } from '../auth';


export default {
  name: 'Auth',
  methods: {
    handleLogin() {
      login();
    },
    handleLogout() {
      logout();
    },
    isLoggedIn() {
      return isLoggedIn();
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar-right { margin-right: 0px !important}

.log {
  margin: 5px 10px 0 0;
}
</style>
