$(function(){
	$('#logo').click(function(){window.open('http://dn.gameflier.com/');});
	$('#download').click(function(){window.open('http://dn.gameflier.com/download/game.html');});
	$('#account').click(function(){window.open('https://gf2.gameflier.com/account/aloneregister.aspx');});
	$('#fb').click(function(){window.open('https://www.facebook.com/dn.gameflier');});
	$('#share').click(function(){window.open('http://www.facebook.com/sharer.php?u=http://dn.gameflier.com/ep/20150717_machina/index.html');});
	$('#gamer').click(function(){window.open('http://forum.gamer.com.tw/A.php?bsn=13211');});
	$('#gamebase').click(function(){window.open('http://www.gamebase.com.tw/forum/60239/');});
	$('.b1').click(function(){window.open('http://gf.gameflier.com/action/04/index.asp?ID=1086');});
	$('.b2').click(function(){window.open('http://gf.gameflier.com/action/04/index.asp?ID=1082');});
	$('.b3').click(function(){window.open('http://gf.gameflier.com/action/04/index.asp?ID=1081');});
	$('.b4').click(function(){window.open('http://gf.gameflier.com/action/04/index.asp?ID=1085');});
	$('.b5').click(function(){window.open('http://dn.gameflier.com/news/news.html?ptype=news&id=1152 ');});
	$('.b6').click(function(){window.open('http://dn.gameflier.com/download/update.aspx');});
	$('.b7').click(function(){window.open('http://dn.gameflier.com/news/news.html?ptype=news&id=901');});
	  
 	var vars = {};
	var params = { scale:"noscale", menu:"false", wmode:"transparent", allowFullScreen:"true", allowscriptaccess: "always" };
	var attributes = { id:"flashContent", name:"flashContent" };
	
	swfobject.embedSWF("swf/light.swf", "flashContent", "1000", "350", "10.0.0","false",vars,params,attributes);
});
