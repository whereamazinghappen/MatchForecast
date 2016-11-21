<template>
<div class="container">
  <header id="header">
    <navbar></navbar>    
  </header>
<div id="main_content">
  <world-map></world-map>
  <loading></loading> 
</div>  
</div>
</template>

<script>
import Navbar from './components/Navbar'
import WorldMap from './components/WorldMap'
import Loading from './components/Loading'
export default {
  name: 'app',
  components: {
    Navbar,
    WorldMap,
    Loading,
  }
}
</script>

<style lang="scss">
@import "assets/css/reset/normalize.css";
.container{
  height: 100%;
}
#header {
  font-family: "Microsoft YaHei",​Tahoma,​Arial,​sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #021120;   
}
#main_content{
  height: calc(100% - 60px);
  overflow: hidden;
  background-color: #041a32;
}
</style>
