<template>
	<div class="banner">
        <ul class="clearfix">
            <li><img src="../assets/images/img_1.jpg" alt=""/>
            	<div class="text-box">
                	<h2>中国的亿万富翁人数已经超过美国 全球女富豪猛增</h2>
                    <p>爱新网</p>
                </div>
            </li>
            <li><img src="../assets/images/img_2.jpg" alt=""/>
            	<div class="text-box">
                	<h2>滴滴急刹车 创业6年亏390亿元 程维确认亏损</h2>
                    <p>观察者网</p>
                </div>
            </li>
            <li><img src="../assets/images/img_3.jpg" alt=""/>
            	<div class="text-box">
                	<h2>机构称我国房产中介佣金率偏低 远低于美国日本等</h2>
                    <p>中国新闻网</p>
                </div>
            </li>
            <li><img src="../assets/images/img_2.jpg" alt=""/>
            	<div class="text-box">
                	<h2>媒体谈自如 甲醛房 行业协会仿佛人间蒸发</h2>
                    <p>环球网</p>
                </div>
            </li>
            
			<!--<li v-for="(ban,index) in imgArr" v-if="index<4">
				<img :src="ban.img" alt=""/>
            	<div class="text-box">
                	<h2>{{ban.title}}</h2>
                    <p>刘德华11 / 文</p>
                </div>
            </li>-->
        
        </ul>
        <ol>
            <li class="active"></li>
            <li></li>
            <li></li>
            <li></li>
        </ol>
    </div>
</template>
<script>
	export default {
		data(){
			return {
				imgArr:[]
			}
		},
		mounted(){
			this.fnSlider();
			this.getsData();
		},
		watch:{
			// '$route':function(){
			// 	alert(1);
			// }
		},
		methods:{
			fnSlider(){
				$(function (){
					var mySwipe=new Swipe($('.banner')[0],{
						auto:2000,
						continuous:true,
						stopPropation:true,
						callback:function (index,element){
							$('.banner ol li').removeClass('active');
							$('.banner ol li').eq(index).addClass('active');
						}
					});
				});
			},
			
			getsData(){
				var _this=this;
				this.$http.get('src/data/news.data').then(function(res){
						_this.imgArr=res.data;
						console.log(_this.imgArr)
					
				}).catch(function(err){
					console.log(err);
				});
			}
			
			
		}
	}
</script>