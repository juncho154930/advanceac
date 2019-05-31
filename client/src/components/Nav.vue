<template>
	<nav class="navbar">
		<a href="/" class="brand">
            <img src="@/assets/logo.png"/>
        </a>
        <ul class="navbar-nav">
        	<li>
        		<router-link tag="a" :to="{ name: 'home' }" class="nav-link button">Home</router-link>
        	</li>
        	<li>
        		<router-link tag="a" :to="{ name: 'home' }" class="nav-link button">FAQ</router-link>
        	</li>
        </ul>
	</nav>
</template>
<script>
export default {
	name: "Nav",
};
</script>
<style lang="scss" scoepd>
.navbar {
	display: flex;
	justify-content: space-between;
	max-width: 1000px;
	height: 80px;
	margin: auto;
	padding: 0 20px;
	@media screen and (max-width: 768px){
		
	}
	.brand{
		img{
			height: 100%;
		}
	}
	.navbar-nav{
		display: flex;
		align-items: center;
	}
}
</style>
