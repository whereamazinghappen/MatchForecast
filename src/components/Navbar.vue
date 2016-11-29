<template>
	<div class="nav-wrapper">
		<div class="nav-content">
			<a href="/" class="nav-logo brand"><img src="../assets/images/logo-trans.png"></a>
			<div class="nav-link">
				<ul class="nav-list">
					<li><router-link to='/home' href="">首页</router-link></li>
					<li><router-link to='/result' href="">历史数据</router-link></li>
					<li><router-link to='/pkstage' href="">PK擂台</router-link></li>
					<li><router-link to='/toplist' href="">懂球帝</router-link></li>
					<li><router-link to='/communication' href="">周边论坛</router-link></li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script></script>
<style lang="scss">
	.nav-wrapper{
		height: 60px;
		width: 78%;
		min-width: 750px;
		max-height: 1040px;
		margin: 0 auto;
	}
	.nav-wrapper .nav-content{
		font-size: 16px;
	    height: 60px;
	    line-height: 36px;
	    padding: 12px 0;
	    border-image: linear-gradient(to right, #1c2733 0%, #f50 50%, #1c2733 100%) 1 1 1 1;
	    border-style: none none solid;
	    border-width: 0 0 2.5px;
	    box-sizing: border-box;
	}
	.nav-logo{
		display: inline-block;
		width: 200px;
		height: 36px;
	}
	.nav-logo img{
		height: 120%;	
	}
	.nav-link{
		float: right;
	}
	.nav-link ul{
		list-style: none;
		margin: 0;
	}
	.nav-link ul li{
		float: left;
	    position: relative;
	    text-align: center;
	}	
	.nav-link ul li a{
		text-decoration: none;
		padding-right: 30px;
		color: #aaa;
		transition: color 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) 0s, border 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
		&:hover{
			color:#fff;
		}
		&.router-link-active{
		color: #fff;
	}
	}	
</style>