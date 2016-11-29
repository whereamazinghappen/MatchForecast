<template>
<div id="main_content">
  <world-map></world-map>
  <loading></loading> 
</div>
</template>
<script>
import WorldMap from '../components/WorldMap'
import Loading from '../components/Loading'
export default {
  name: 'home',
  components: {   
    WorldMap,
    Loading,
  }
}
</script>

<style lang="scss">
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
