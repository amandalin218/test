$(document).ready(function(){
	
 /* $("#btn1").click(function(){   
	$("#content2,#content3,#content4,#content5").fadeOut();
	$("#content1").fadeIn();
  });
    $("#btn2").click(function(){   
	$("#content1,#content3,#content4,#content5").fadeOut();
	$("#content2").fadeIn();
  });
    $("#btn3").click(function(){   
	$("#content1,#content2,#content4,#content5").fadeOut();
	$("#content3").fadeIn();
  });*/
    $('#btn1').click(function(){
		$('html,body').animate({scrollTop:$('#content1').offset().top}, 800);
	});
    $('#btn2').click(function(){
		$('html,body').animate({scrollTop:$('#content1').offset().top}, 800);
	});
    $('#btn3').click(function(){
		$('html,body').animate({scrollTop:$('#content1').offset().top}, 800);
	});
    $('#top').click(function(){
		$('html,body').animate({scrollTop:"0"}, 800);
	});

});

$(function(){
	$('#logo').click(function(){window.open('http://ro.gameflier.com/');});
	$('#download').click(function(){window.open('http://ro.gameflier.com/download/patch.asp');});
	$('#account').click(function(){window.open('https://gfb.gameflier.com/Billing/account/RON/index.aspx?SourceID=2&Game=RON');});
	$('#fb').click(function(){window.open('https://www.facebook.com/pages/%E6%96%B0%E4%BB%99%E5%A2%83%E5%82%B3%E8%AA%AA-RagnarokRO-%E5%AE%98%E6%96%B9%E7%B2%89%E7%B5%B2%E5%9C%98/174975122571813?fref=ts');});
	$('#share').click(function(){window.open('http://www.facebook.com/sharer.php?u=http://ro.gameflier.com/ep/2015_happy/index.html');});
	$('#gamer').click(function(){window.open('http://forum.gamer.com.tw/A.php?bsn=4212');});
	$('#gamebase').click(function(){window.open('http://www.gamebase.com.tw/forum/5090');});
	$('#add').click(function(){window.open('http://ro.gameflier.com/action/20150727_air/index.aspx');});


});