<template>
	<div class="content mt40">
	    <!--<div class="newsList">
	    	<ul>
	            <li v-for="(item, index) in arrList">
	            	<a href="javascript:;">
	                    <h2>{{index+1}} .{{item.title}}</h2>
	                    <p>{{item.detail}}</p>
	                </a>
	            </li>
	            
	        </ul>
	    </div>-->

		    <div class="newsList" style="padding-top:0.2rem;">
		    	<ul>
		            <li v-for="(item,index) in arrList" class="clear">
						<router-link :to="{path:'/article', query:{id:item.id,tab:item.tab}}">
							<div class="news-left">
							<img :src="item.img"/>
							</div>
							<div class="news-right">
								<h3 class="newsTitle"> {{item.title}}等</h3>
								<div class="newsMessage">
									<span>{{item.time | normalTime}}</span>
									<span>{{item.source}}</span>
								</div>
							</div>
						</router-link>
		            </li>
		        </ul>
		    </div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				arrList:[]
			}
		},
		mounted(){
			this.fetchData()
		},
		methods:{
			fetchData(){
				var _this=this;
				this.$http.get('src/data/news.data').then(function(res){
					//console.log( res.data);
					//setTimeout(function(){
						_this.arrList=res.data;
					//},1000);
				}).catch(function(err){
					console.log(err);
				});
			}
		}
	}
</script>
<style>
	.mt40{
		margin-top:40px;
	}
	.nav-tab{
		display:none!important;
	}
	.nav{
		height:0.9rem;
	}
</style>