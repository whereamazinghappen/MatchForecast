<template>
	<div v-show="isshow" id="loading">
		<div class="loader-container">
			<div class="loader-rotate"></div>
			<div class="loader-words" v-text="text"></div>
		</div>
	</div>
</template>
<script>
	module.exports={
		data(){
			return{
				isshow:false,
				text:"正在初始化---"
			}
		},
		mounted(){
			this.isshow=false;
		}
	}
</script>
<style lang="scss">
    @keyframes rotate
    {
    	from {transform:rotateZ(0);}
    	to {transform:rotateZ(360deg);}
    }
	#loading{
		background: rgba(3, 26, 50, 0.77) none repeat scroll 0 0;
	    border: 1px solid #346191;
	    border-radius: 20px;
	    box-shadow: 0 0 15px #186ec3;
	    height: calc(100% - 60px);
	    position: absolute;
	    top: 60px;
	    width: 100%;
	    z-index: 8;
	    box-sizing:border-box;
	}
	#loading .loader-container{
		height: 100%;
		width: 100%;
		position: relative;
	}
	#loading .loader-container div{
		width: 200px;
		height: 200px;
		border-radius: 50%;
		position: absolute;
		top: calc(50% - 100px);
		left: calc(50% - 100px);		
	}
	.loader-rotate{
		transform-style: preserve-3d;
		background: #0c4780 none repeat scroll 0 0;
		box-shadow: 0 0 35px #00458c;
		border-color: rgba(255, 255, 255, 0.2) rgba(255, 255, 255, 0.2) rgba(255, 255, 255, 0.2) #2bc5fe;
	    border-image: none;
	    border-style: solid;
	    border-width: 2px;
	    animation: rotate 2s linear infinite;
	}
	.loader-words{
		color: #2bc5fe;
		text-align: center;
		line-height: 200px;
	}
</style>