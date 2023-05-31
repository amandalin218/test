// 給首頁的JS

$(function(){
	//按鈕區域
	$(".toplist > li").hover(
	function(){
		var N = this.id.substr(1);		
		$("#menu"+N).stop(true,true).slideToggle(100);
		});

	//巴哈
	$('#share_1').attr('href','http://forum.gamer.com.tw/A.php?bsn=09734').attr('target','__blank');
	//基地
	$('#share_2').attr('href','http://www.gamebase.com.tw/forum/6630').attr('target','__blank');
	//2000fun
	$('#share_3').attr('href','http://www.2000fun.com/forum-616-1.html').attr('target','__blank');

 	// flash
 	var vars = {};
	var params = { scale:"noscale", menu:"false", wmode:"transparent", allowFullScreen:"true", allowscriptaccess: "always" };
	var attributes = { id:"gf_swf3", name:"gf_swf3" };
	var attributes3 = { id:"game_list2", name:"game_list2" };


swfobject.embedSWF("swf/top.swf", "gf_swf3", "1000", "170", "10.0.0","false",vars,params,attributes);
swfobject.embedSWF("swf/apply.swf", "game_list2", "196", "213", "10.0.0","false",vars,params,attributes3);
 	// flash




   	$("#gf_swf2").hover(function(){
 		$("#gf_swf3").css({zIndex:"61"});
 		
 	 },function(){
 	 	$("#gf_swf3").css({zIndex:"29"});
 		

 	 });





  	$(".angle_bar").hover(function(){
 		$(this).css({zIndex:"53"});
 	},function(){
 		$(this).css({zIndex:"30"});		
 	});


 	$('.update_web').click(function(){top.location.href ="/download/donwload3.aspx";});
 	$('.project_shop').click(function(){window.open('http://al.gameflier.com/news/new_detail.aspx?id=3076');});

 	






	
});//ready