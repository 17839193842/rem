<template>
	<div class="content">
	    <header>
		   <img onclick="window.history.go(-1)" src="../assets/img/back.png">
		 </header>
	    <div class="login-box">
	    	<p class="lsolid"></p>
	        <div class="login">
	        	<h2 class="text-center">用户注册页面</h2>
	        </div>
	        <p class="rsolid"></p>
	    </div>
	    <form id="f1" v-if="!executing" @keyup.enter="regiser()">
		    <ul>
		        <li class="lifirst">
		        	<input type="text" value="" v-model="username" autofocus/>
		            <span>输入帐号</span>
		        </li>
		        <li>
		        	<input type="text" value="" v-model="password"/>
		            <span>输入密码</span>
		        </li>
		        <li>
		        	<input type="text" value="" v-model="password2"/>
		            <span>再次密码</span>
		        </li>
		    </ul>
		    <div class="footbox">
		        <input type="button" value="注 册" class="login-btn" @click="regiser()"/>
		        <!--<a href="http://localhost:8080/user-login" class="tishi">登录</a>-->
		    </div>
	    </form>
	</div>
</template>
<style scoped>
	body{ background:#f2f4f5;}
	.content{max-width:6.4rem; margin:0 auto;}
	.content .fhbtn{ padding-top:0.27rem;}
	.content .fhbtn a{ display:block;width:0.23rem;height:0.25rem; background:url(../assets/img/history1.png) no-repeat 0 0; background-size:100%; margin-left:0.3rem;}
	.content h1{width:2.18rem;height:1.35rem; background:url(../assets/images/img_1.jpg) no-repeat 0 0; background-size:100%; margin:0 auto; margin-top:1.22rem;}
	.content .login{width:2.0rem;height:0.38rem; margin:0 auto; margin-top:1.25rem;}
	.login a{width:0.97rem;height:0.38rem; font-size:0.35rem; line-height:0.38rem; float:left; color:#4c4f50; text-align:center;}
	.login span{ float:left;height:0.38rem; border-left:1px solid #4c4f50;}
	.content .login-box{ position:relative;}
	.content .login-box .lsolid{width:1.96rem;height:0.18rem; border-bottom:1px solid #4c4f50; position:absolute;top:0;left:0.1rem;}
	.content .login-box .rsolid{width:1.96rem;height:0.18rem; border-bottom:1px solid #4c4f50; position:absolute;top:0;right:0.1rem;}
	.content ul{width:5.78rem;height:2.88rem; border:1px solid #e5e7e8; background:#fff; margin:0 auto; margin-top:0.68rem;}
	.content ul li{height:0.95rem; position:relative;}
	.content ul li.lifirst{border-bottom:1px solid #e5e7e8;}
	.content ul li input{ padding-left:1.24rem;width:4.54rem;height:100%; font-size:0.4rem;}
	.content ul li span{width:1.23rem;height:0.49rem; position:absolute;top:0.26rem;left:0; border-right:1px solid #676868; color:#676868; font-size:0.25rem; line-height:0.49rem; text-align:center;}
	.content .footbox{width:4.65rem;height:0.65rem;margin:0 auto; }
	.content .login-btn{width:4.65rem;height:0.65rem; background:#4c4f50; color:#fff; text-align:center; line-height:0.65rem; border-radius:8px; display:block; margin-top:0.62rem; font-size:0.28rem;}
	.content .tishi{width:1.4rem; font-size:0.25rem; margin-top:0.28rem; display:inline-block;}
	.text-center{text-align: center;}
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
</style>

<script type="text/javascript">
	export default {
		data(){
			return {
				 username: localStorage.username || '',
				 password: '',
				 executing: false,
				 password2: ''
			}
		},
		mounted(){
			
		},
		methods:{
			
			 async regiser () {
			 
		      if (!this.username) {
		        alert("请输入用户名称!");
		        return
		      }
		      if (!this.password) {
		      	alert("请输入用户密码!");
		        return
		      }
		      if (!this.password2) {
		      	alert("请再次输入用户密码!");
		        return
		      }
		      if(this.password!=this.password2){
		      	alert("两次密码不一致，请重新输入");
		      	return 
		      }
       	      this.executing = true
       	      
       	      alert("注册成功，请登录");
		      window.location.href="http://localhost:8080/user-login"
		    }
			 
			
		}
	}
	
	
</script>