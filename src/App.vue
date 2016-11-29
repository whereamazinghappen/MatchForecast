<template>
<div class="container">
  <header id="header">
    <navbar></navbar>    
  </header>   
    <router-view></router-view>
</div>   
</template>
<script>
import Navbar from './components/Navbar'
export default {
  components:{Navbar} 
}
</script>
<style lang="scss">
@import "assets/css/reset/normalize.css";
</style>
