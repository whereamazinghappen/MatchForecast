<template>
<div class="container">
  <header id="header">
    <navbar></navbar>    
  </header>   
    <router-view></router-view>
</div>   
</template>
<script>
import Store from './vuex/store'
import Navbar from './components/Navbar'
export default {
  computed:{
  	count () {
  		return Store.state.count;
  	}
  },	
  components:{Navbar},  
}
</script>
<style lang="scss">
@import "assets/css/reset/normalize.css";
body{
  overflow: hidden;
}
</style>
