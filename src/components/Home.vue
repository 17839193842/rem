<template>
	<div class="content">
		 
      <div class="news">
			<Slider></Slider>
		    <div class="newsList">
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
	   
	   <div class="news top16">
	   	  <div class="newsList">
		    	<ul>
		            <li v-for="(item,index) in newsArr" class="clear">
						<router-link :to="{path:'/article', query:{id:item.id,tab:item.tab}}">
							<div class="news-left">
							<img :src="item.img"/>
							</div>
							<div class="news-right">
								<h3 class="newsTitle"> {{item.title}}</h3>
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
	   
	    <div class="news top16">
	   	  <div class="newsList">
		    	<ul>
		            <li v-for="(item,index) in financeArr" class="clear">
						<router-link :to="{path:'/article', query:{id:item.id,tab:item.tab}}">
							<div class="news-left">
							<img :src="item.img"/>
							</div>
							<div class="news-right">
								<h3 class="newsTitle"> {{item.title}}</h3>
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
	   
	   <div class="news top16">
	   	  <div class="newsList">
		    	<ul>
		            <li v-for="(item,index) in sportArr" class="clear">
						<router-link :to="{path:'/article', query:{id:item.id,tab:item.tab}}">
							<div class="news-left">
							<img :src="item.img"/>
							</div>
							<div class="news-right">
								<h3 class="newsTitle"> {{item.title}}</h3>
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
	   
	   <div class="news top16">
	   	  <div class="newsList">
		    	<ul>
		            <li v-for="(item,index) in happyArr" class="clear">
						<router-link :to="{path:'/article', query:{id:item.id,tab:item.tab}}">
							<div class="news-left">
							<img :src="item.img"/>
							</div>
							<div class="news-right">
								<h3 class="newsTitle"> {{item.title}}</h3>
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
	   <div class="news top16">
	   	  <div class="newsList">
		    	<ul>
		            <li v-for="(item,index) in  affairsArr" class="clear">
						<router-link :to="{path:'/article', query:{id:item.id,tab:item.tab}}">
							<div class="news-left">
							<img :src="item.img"/>
							</div>
							<div class="news-right">
								<h3 class="newsTitle"> {{item.title}}</h3>
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
	   <div class="news top16">
	   	  <div class="newsList">
		    	<ul>
		            <li v-for="(item,index) in educateArr" class="clear">
						<router-link :to="{path:'/article', query:{id:item.id,tab:item.tab}}">
							<div class="news-left">
							<img :src="item.img"/>
							</div>
							<div class="news-right">
								<h3 class="newsTitle"> {{item.title}}</h3>
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
	  
	   
	   
	   
	</div>
</template>
<script>
	import Slider from './Slider.vue'
	export default {
		data(){
			return {
				arrList:[],
				newsArr:[],
				financeArr:[],
				sportArr:[],
				happyArr:[],
				affairsArr: [],
				educateArr:[]
			}
		},
		components:{
			Slider
		},
		mounted(){
			//获取数据
			this.fetchData();
//			this.navContent();
		},
		methods:{
			fetchData(){
				var _this=this;
				//头条
				this.$http.get('src/data/top.data').then(function(res){
					console.log(res)
						_this.arrList=res.data;
				}).catch(function(err){
					console.log(err);
				});
				//新闻
				this.$http.get('src/data/news.data').then(function(res){
					console.log(res)
						_this.newsArr=res.data;
				}).catch(function(err){
					console.log(err);
				});
				//财经
				this.$http.get('src/data/finance.data').then(function(res){
					console.log(res)
						_this.financeArr=res.data;
				}).catch(function(err){
					console.log(err);
				});
				//体育
				this.$http.get('src/data/sport.data').then(function(res){
					console.log(res)
						_this.sportArr=res.data;
				}).catch(function(err){
					console.log(err);
				});
				//娱乐
				this.$http.get('src/data/happy.data').then(function(res){
					console.log(res)
						_this.happyArr=res.data;
				}).catch(function(err){
					console.log(err);
				});
				//军事
				this.$http.get('src/data/affrias.data').then(function(res){
					console.log(res)
						_this.affairsArr=res.data;
				}).catch(function(err){
					console.log(err);
				});
				//教育
				this.$http.get('src/data/eduate.data').then(function(res){
					console.log(res)
						_this.educateArr=res.data;
				}).catch(function(err){
					console.log(err);
				});
	
			}
			
		}
	}

</script>
<style scoped>
	@import '../assets/css/index.css';

</style>