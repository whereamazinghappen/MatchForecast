<template>
	<div :class={spot:isspot} id="worldmap-chart"></div>
</template>
<script>
export default {
  data(){
  	return{
  		isspot:false,
  		option:{       
        backgroundColor: '#041A32',       
        geo: {
            map: 'world',
            left: 0,
            right: 0,
            silent: true,
            itemStyle: {
                normal: {
                    borderColor: '#369',
                    color: '#10253C'
                }
            }
        },
        series: []
    }  
  	}
  },
  mounted () {
  	const chart=echarts.init(document.querySelector('#worldmap-chart'));  
  	chart.setOption(this.option);
  	this.isspot=true;
  }
}

</script>
<style lang="scss">
	#worldmap-chart{	
		height: 200%;
		width: 200%;
		position: relative;
		left: -100%;			
		transition: left 3s linear 0s,transform 3s linear 3s;		
	}
	#worldmap-chart.spot{
		left: -45%;
		top: -70%;	
		transform-style: preserve-3d;
		transform-origin: 0% 0%;	
		transform: scale(2);
	}	
</style>