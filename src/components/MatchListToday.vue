<template>
	<div class="container-todayMatchList">
	<div class="H1">今日热门比赛</div>
	 <div class="matchs-box">
		<div class="eachMatch-box" v-for="match in matchs">
			<div class="match-time">{{ match.time }}</div>
			<div class="team-box">
				<div :style="{backgroundImage: 'url('+match.home.icon+')' }" class="f_l home">{{ match.home.name }}</div>
				<div :style="{backgroundImage: 'url('+match.guest.icon+')' }" class="f_r guest">{{ match.guest.name }}</div>
			</div>
			<div class="suppport">
				<div class="support-title">支持率</div>
				<div class="support-content"><div class="rate-home"></div></div>
			</div>
		</div>
	 </div>		
	</div>
</template>
<script>
	export default {
		data (){
			return {
				matchs:[
				{time:"2017-01-01 08:00",home:{name:"Lakers",icon:"http://mat1.gtimg.com/sports/nba/logo/1602/18.png"},guest:{name:"Rockets",icon:"http://mat1.gtimg.com/sports/nba/logo/1602/4.png"},"realResult":"home","forcastResult":"home"},
				{time:"2017-01-01 08:00",home:{name:"Lakers",icon:"http://mat1.gtimg.com/sports/nba/logo/1602/18.png"},guest:{name:"Rockets",icon:"http://mat1.gtimg.com/sports/nba/logo/1602/1.png"},"realResult":"home","forcastResult":"home"},
				{time:"2017-01-01 08:00",home:{name:"Lakers",icon:"http://mat1.gtimg.com/sports/nba/logo/1602/18.png"},guest:{name:"Rockets",icon:"http://mat1.gtimg.com/sports/nba/logo/1602/17.png"},"realResult":"home","forcastResult":"home"},
				{time:"2017-01-01 08:00",home:{name:"Lakers",icon:"http://mat1.gtimg.com/sports/nba/logo/1602/18.png"},guest:{name:"Rockets",icon:"http://mat1.gtimg.com/sports/nba/logo/1602/22.png"},"realResult":"home","forcastResult":"home"},
				
				]
			}
		}
	}
</script>
<style lang="scss">
.container-todayMatchList{
	height:100%;
	width:80%;
	min-width:1190px;
	margin: 0 auto;
}
.eachMatch-box{
	height:300px;
	width:50%;
	border:1px solid #369;
	flex:1;
	color: red;	
}
.H1{
	text-align: center;
	font-size: 30px;
	color: #fff;
	padding: 30px 0;
}
.matchs-box{
	height: 80%;
	display: flex;
}
.match-time{
	text-align: center;
	padding: 10px 0;
	color: #33b0ff;
}
.f_l{
	float: left;
}
.f_r{
	float: right;
}
.team-box{
	height :120px;
}
.team-box div{
	width: 100px;
	height: 100px;
	background-size: contain;
	text-align: center;
	padding-top: 100px;
	background-repeat: no-repeat;
}
.support-title{
	color: #fff;
	padding: 10px;
	text-align: center;
}
.support-content{
	background-color: #2690fe;
	height: 10px;
}
.rate-home{
	background-color: #ea4444;
	height: 100%;
	width: 63%;
}
</style>