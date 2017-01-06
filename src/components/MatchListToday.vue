<template>
	<div class="container-todayMatchList">
		<div class="eachMatch-box" v-for="match in matchs">
			{{ match.time+match.home }}
		</div>	
	</div>
</template>
<script>
	export default {
		data (){
			return {
				matchs:[
				{time:"2017-01-01 08:00",home:"Lakers",guest:"Rockets","realResult":"home","forcastResult":"home"},
				{time:"2017-01-01 08:00",home:"Lakers",guest:"Rockets","realResult":"home","forcastResult":"home"},
				{time:"2017-01-01 08:00",home:"Lakers",guest:"Rockets","realResult":"home","forcastResult":"home"},
				{time:"2017-01-01 08:00",home:"Lakers",guest:"Rockets","realResult":"home","forcastResult":"home"},
				{time:"2017-01-01 08:00",home:"Lakers",guest:"Rockets","realResult":"home","forcastResult":"home"}]
			}
		}
	}
</script>
<style lang="scss">
.container-todayMatchList{
	height:100%;
	width:100%;
	min-width:1190px;
	display:flex;
}
.eachMatch-box{
	height:300px;
	width:50%;
	border:1px solid #369;
	flex:1;
	color: red;	
}
</style>