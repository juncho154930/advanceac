<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import OwnerService from './services/api';

export default {
  name: 'App',
  created() {
    OwnerService.getAll().then((response) => {
      console.log(response.data);
    }).catch((error) => {
      console.log(error.response.data);
    });
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
