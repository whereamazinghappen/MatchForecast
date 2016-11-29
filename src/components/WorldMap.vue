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
            symbolSize: 23,
            label: {
                normal: {
                    show: false,
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
        },{
        	type:'lines',
        	name:'match',
        	zlevel: 1,	       
	         lineStyle: {
	            normal: {
	                color: 'red',
	                width: 0,
	                curveness: 0.2
	            }
        },
        	data:[{fromName:'SA',toName:'a76ers',coords:[[-98.476955,29.441738],[-75.222721,40.033664]]}],
        },
	         {
	        name: 'match',
	        type: 'lines',
	        zlevel: 2,
	        effect: {
	            show: true,
	            period: 6,
	            trailLength: 0,
	            symbol: 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z',
	            symbolSize: 15
	        },
	        lineStyle: {
	            normal: {
	                color: '#ccc',
	                width: 1,
	                opacity: 0.4,
	                curveness: 0.2
	            }
	        },
	        data: [{fromName:'spurs',
                  toName:'a76ers',
                  coords:[[-98.476955,29.441738],[-75.222721,40.033664]]
                },
                {fromName:'cavaliers',
                 toName:'mavericks',
                 coords:[[-81.666041,41.463045],[-96.846495,32.7878]]
                },
                {fromName:'warriors',
                 toName:'heat',
                 coords:[[-121.928526,37.340038],[-80.267847,25.896686]]
                },
            ]
	    }]
    }  
  	}
  },
  methods:{  	
     formatterData:function(d,s){
  		let _res=[];
  		d.forEach(function(item,index){
  			let o={name:item.name,
  			   symbol:`image://http://n.sinaimg.cn/sports/nba/thewire/`+item.name+`_new.png`,
  			   value:item.coord
  			};
  			_res.push(o); 
  		})
  		if (s) {
  		return _res.slice(1,10); 
  		}else{
  		return _res   			
  		}
  	}  
  },
  mounted() {  	
  	this.option.series[0].data=this.formatterData(TeamData,1);
  	const chart=echarts.init(document.querySelector('#worldmap-chart'));  
  	chart.setOption(this.option);
  	this.isspot=true;
    //arrow箭头函数中的this指向vm;  	
  	setTimeout(()=>{
  		this.option.series[0].data=this.formatterData(TeamData);  		  		
  		chart.setOption(this.option);
  	},7000)
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