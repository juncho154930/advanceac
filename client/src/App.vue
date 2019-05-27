/* eslint-disable */
<template>
  <div id="app">
    <ul>
      <li v-for='todo in todos'>
        <span>{{todo}}</span>
      </li>
    </ul>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import ToDoAPI from '@/services/ToDoAPI.js'
export default {
  name: 'App',
  data () {
    return {
      todos: []
    }
  },
  mounted () {
    this.loadTodos()
  },
  methods: {
    async loadTodos () {
      const response = await ToDoAPI.getToDos();
      this.todos = response.data;
    },
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
