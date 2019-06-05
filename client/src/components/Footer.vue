<template>
  <footer class="footer">
  	Advance A/C &copy; 2019
  	<ul class="footer-nav">
    	<li>
    		<router-link tag="a" :to="{ name: 'home' }" class="nav-link button">Privacy</router-link>
    	</li>
    	<li>
    		<router-link tag="a" :to="{ name: 'home' }" class="nav-link button">Legal</router-link>
    	</li>
    	<li>
    		<router-link tag="a" :to="{ name: 'home' }" class="nav-link button">Terms of Use</router-link>
    	</li>
    </ul>
  </footer>
</template>
<script>
export default {
	name: "Footer",
};
</script>
<style lang="scss">
.footer{
  width:100%;
  height: 50px;
  padding: 20px 0 40px;
  background-color: #fff;
}
</style>
