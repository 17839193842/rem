
$(".channel ul li").click(function(){
	let i=$(this).index();
	$(".channel ul li").eq(i).addClass("active").siblings().removeClass("active");
})
	