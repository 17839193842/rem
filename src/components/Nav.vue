<template>
	<div class="nav">
		<header>
		   <img onclick="window.history.go(-1)" src="../assets/img/person.png">
		   <span>爱新闻</span>
		   <img src="../assets/img/search.png" >
	    </header>
		<div class="nav-tab">
			<div class="channel">
				<ul>
					<li class="active">头条</li>
					<li>新闻</li>
					<li>财经</li>
					<li>体育</li>
					<li>娱乐</li>
					<li>军事</li>
					<li>教育</li>
				</ul>
			</div>
			<div class="addChannel">
				<img src="../assets/img/add.png" alt="" />
			</div>
		</div>
		  
		<!--<ul>
	    	<router-link to="/home" tag="li" active-class="active">
	    		<a href="javascript:;">首页</a>
	    	</router-link>
	    	<router-link to="/news" tag="li" active-class="active">
	    		<a href="javascript:;">新闻</a>
	    	</router-link>
	    	<router-link to="/follow" tag="li" active-class="active">
	    		<a href="javascript:;">关注</a>
	    	</router-link>
	    	<router-link to="/column" tag="li" active-class="active">
	    		<a href="javascript:;">栏目</a>
	    	</router-link>
	    </ul>-->
	</div>
</template>
<script>
	export default{
		data(){
			return {
				
			}
		},
		mounted(){
//			this.navTab();
		},
		methods:{
//			navTab(){
//				$(".channel ul li").click(function(){
//					let i=$(this).index();
//					$(".channel ul li").eq(i).addClass("active").siblings().removeClass("active");
//				})
//			}
		}
	}
</script>

<style scoped>
	header{
		width: 100%;
		height: 0.85rem;
		background-color: #d43d3d;
		color: #fff;
		font-size: 16px;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
		position: fixed;
		top: 0;
	}
	header img{
		width: 0.45rem;
		height: 0.45rem;
		padding: 0 .19rem;
	}
	.nav-tab{
		width: 100%;
	    height: 0.60rem;
	    background-color: #f4f5f6;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	    position: fixed;
	    z-index: 99;
	    top:0.90rem;
	}
	.channel{
		-webkit-box-flex: 1;
	    -ms-flex: 1;
	    flex: 1;
	    white-space: nowrap;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	    -webkit-box-align: center;
	    -ms-flex-align: center;
	    align-items: center;
	    overflow-x: scroll;
	    font-size: 0.25rem;
	    color: #505050;
	    height:0.60rem;
	}
	.channel ul{
		height:auto;
		width:auto;
	}
	.channel ul li{
	    display: inline-block;
	    margin-left: 0.15rem;
	    margin-right: 0.15rem;
	    height:auto;
	    float:inherit;
	    width:auto;
	    cursor: pointer;
	    /*line-height:0.60rem;*/
	}
	.channel ul li.active{
		color: red;
	}
	.addChannel{
	    width: 10%;
	    height: 100%;
	    border-left: 1px solid #ccc;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	    -webkit-box-pack: center;
	    -ms-flex-pack: center;
	    justify-content: center;
	    -webkit-box-align: center;
	    -ms-flex-align: center;
	    align-items: center;
	}
	.addChannel img{
	    /* width: .53rem; */
	    height: .43rem;
	    width: 100%;
	}
</style>