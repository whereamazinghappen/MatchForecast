<template>
	<div :class={spot:isspot} id="worldmap-chart"></div>
</template>
<script>
import TeamData from "../assets/js/Team"
export default {	
  data (){
  	return{
  		isspot:false,
  		geoMap:{"SAS":[-98.474081,29.462369]},
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
        series: [{
            name: '排名',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: [{name:"SAS",symbol:"circle",value:[-98.474081,29.462369,2],itemStyle:{
            	normal:{
            		color:'black'
            	}
            }}],            
            symbolSize: 30,
            label: {
                normal: {
                    show: true,
                    formatter: '{b}'
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                emphasis: {
                    borderColor: '#fff',
                    borderWidth: 1
                }
            }
        }]
    }  
  	}
  },
  methods:{  	
     formatterData:function(d){
  		let _res=[];
  		d.forEach(function(item,index){
  			let o={name:item.name,
  			   symbol:`image://http://n.sinaimg.cn/sports/nba/thewire/`+item.name+`_new.png`,
  			   value:item.coord
  			};
  			_res.push(o); 
  		})
  		return _res;  		 		
  	}  
  },
  mounted() {
  	console.log(TeamData);
  	this.option.series[0].data=this.formatterData(TeamData);
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