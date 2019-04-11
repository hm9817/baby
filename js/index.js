$(document).ready(function() {
	$(".header_a").mouseover(function(){
		$(this).children("#div1").css("display","block");
	}).mouseout(function(){
		$(this).children("#div1").css("display","none");
	})
})

