<template>
	<div class={show:isshow} id="usa-map"></div>
</template>
<script>
	module.exports={
		data(){
			return {
				isshow:false
			}
		},
		mounted(){
			this.isshow=true;
		}
	}
</script>
<style lang="scss">
	#usa-map{		
		opacity: 0;
		height: calc(100% - 60px);
		transition: opacity 2s linear 6s;
	}
	#usa-map.show{
		opacity: 1;
		z-index: 2;
	}
</style>