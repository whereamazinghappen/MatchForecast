<template>
<div id="main_content" :class="{up:isup}">
<div class="map-container" :class="{rotate:isrotate}">
  <world-map></world-map>
</div>  
  <match-list-today></match-list-today>
  <loading></loading> 
</div>
</template>
<script>
import WorldMap from '../components/WorldMap'
import Loading from '../components/Loading'
import MatchListToday from '../components/MatchListToday'
export default {
  name: 'home',
  components: {   
    WorldMap,
    Loading,
    MatchListToday,
  },
  data() {
    return {
      isup:false,
      transitioning:false,
      isrotate:false
    }
  },
  mounted() {
    var flow=document.querySelector("#main_content");
    flow.addEventListener("mousewheel",(e)=>{
      if (this.transitioning) {
        return false;
      }
      this.isup=!this.isup;
      this.isrotate=!this.isrotate;
      this.transitioning=true;
    })
    flow.addEventListener("transitionend",(e)=>{   
      this.transitioning=false;
    })
  }
}
</script>

<style lang="scss">
.container{
  height: 200%;
  background-image:url("../../static/images/bj.jpg");
  background-size:cover;
}
#header {
  font-family: "Microsoft YaHei",​Tahoma,​Arial,​sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #021120;
  position: relative;
  z-index: 7;   
}
#main_content{
   height: calc(50% - 60px);
   transition: transform 1s linear .5s;
}
#main_content.up{
  transform: translateY(-100%);  
}
.map-container{
  height: 100%;
  overflow: hidden;
  transition: transform 1s linear;
  border: 1px solid #346191;
  border-radius: 20px;
  box-shadow: 0 0 15px #186ec3; 
}
.map-container.rotate{
  transform-style: preserve-3d;
  transform:rotateX(90deg);
  transform-origin: 50%;
}
</style>
