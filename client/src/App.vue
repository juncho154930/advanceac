<template>
  <div id="app">
    <Nav />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default {
  name: 'App',
  components: {
    Nav,
    Footer,
  },
  created() {
  },
};
</script>

<style lang="scss">
body{
  margin:0;
  padding:0;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  text-decoration: none;
  outline: none;
  &:hover{
    cursor: pointer;
  }
}
button{
  &:hover{
    cursor: pointer;
  }
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
}
.container{
  max-width: 1024px;
  margin: auto;
}
.button{
  display: inline-block;
  height: 40px;
  padding: 0 14px;
  background-color:hsl(214, 70%, 60%);
  color:#fff;
  text-shadow: 0 1px 3px rgba(36,180,126,.4);
  box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
  border-radius: 4px;
  font-size: 15px;
  font-weight: 600;
  line-height: 40px;
  letter-spacing: .025em;
  text-transform: uppercase;
  white-space: nowrap;
  transition: all .15s ease;
  &:hover{
    transform: translateY(-1px);
  }
}
</style>
