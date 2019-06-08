<template>
	<nav class="navbar container" role="navigation">
		<a href="/" class="brand">
        Advance A/C
    </a>
		<div class="navSection">
	    <input type="checkbox" /> 
	    <span></span>
	    <span></span>
	    <span></span>
	    <ul class="nav-menu">
	      <li>
	    		<router-link tag="a" :to="{ name: 'home' }" class="button">Contact</router-link>
	    	</li>
	    	<li>
	    		<router-link tag="a" :to="{ name: 'home' }" class="button">Support</router-link>
	    	</li>
	    	<li class="nav-links button">
	    		Account
	    		<ul>
	    			<li>
			    		<router-link tag="a" :to="{ name: 'home' }" class="button">Log In</router-link>
			    	</li>
			    	<li>
			    		<router-link tag="a" :to="{ name: 'AccountRegister' }" class="button">Sign Up</router-link>
			    	</li>
	    		</ul>
	    	</li>
	    </ul>
	  </div>
	</nav>
</template>
<script>
export default {
	name: "TheNav",
	data() {
		return{
			account: {
				open: false,
			}
		}
	}
};
</script>
<style lang="scss" scoepd>
.navbar {
	display: flex;
	justify-content: space-between;
	align-items:center;
	position: absolute;
	top:0;
	left:0;
	right:0;
	padding: 20px 40px;
	background-color: transparent;
}
.brand{
	color:#d4d4d4;
	font-size:24px;
}
.navSection
{
	position: absolute;
  top:20px;
	right: 20px;
	@media screen and (max-width: 768px){
	  position: relative;
		top:0;
		right: 0;
	  z-index: 1;
	}
  &>input{
  	display: none;
  	@media screen and (max-width: 768px){
  		display: block;
	    width: 33px;
	    height: 22px;
	    position: absolute;
	    opacity: 0;
	    z-index: 2;
	    cursor: pointer;
	    &:checked{
	      & ~ span{
	        opacity: 1;
	        transform: rotate(45deg) translate(-2px, -1px);
	        &:nth-last-child(3){
	          opacity: 0;
	          transform: rotate(0deg) scale(0.2, 0.2);
	        }
	        &:nth-last-child(2){
	          transform: rotate(-45deg) translate(0, -1px);
	        }
	      }
	      & ~ .nav-menu li{
	       transform: translateX(0);
	      }
	    }
  	}
  }
  &>span{
  	display: none;
  	@media screen and (max-width: 768px){
			display: block;
	    width: 33px;
	    height: 4px;
	    margin-bottom: 5px;
	    position: relative;
	    background: #cdcdcd;
	    border-radius: 3px;
	    z-index: 1;
	    transform-origin: 4px 0px;
	    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
	                background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
	                opacity 0.55s ease;
	    &:first-child{
	      transform-origin: 0% 0%;
	    }
	    &:nth-last-child(2){
	      transform-origin: 0% 100%;
	      margin-bottom: 0;
	    }
  	}
	}
	.nav-menu
	{
		display: flex;
	  position:absolute;
	  right: 0;
	  top:0;
	  @media screen and (max-width: 768px){
	  	overflow: hidden;
  		flex-direction: column;
  		align-items: flex-end;
	  	margin-top:40px
	  }
	  li{
		  margin: 0 10px;
		  @media screen and (max-width: 768px){
		  	margin-right: 0;
		  	margin-bottom:10px;
			  -webkit-font-smoothing: antialiased;
			  transform: translateX(calc(100% + 3px));
			  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
		  }
	  }
	} 
	.nav-links{
		cursor: pointer;
		overflow: hidden;
		&:hover{
			height: 100%;
		}
		@media screen and (max-width: 768px){
			height: 100%;
		}
		ul{
			display: flex;
			flex-direction: column;
			li{
				margin: 10px 0;
				a{
					background-color:#3ecf8e;
				}
			}
		}
	}
}
</style>
