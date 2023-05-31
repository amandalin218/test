$(function(){
	$('#logo').click(function(){window.open('http://la.gameflier.com');});
	$('#account').click(function(){window.open('https://gfb.gameflier.com/Billing/account/LA/index2.asp?SourceID=2&Game=LA');});
	$('#download').click(function(){window.open('http://la.gameflier.com/download/download1.aspx');});	
	$('#fb').click(function(){window.open('https://www.facebook.com/la.gameflier');});
	$('#gamebase').click(function(){window.open('http://www.gamebase.com.tw/forum/60506');});
	$('#share').click(function(){window.open('http://www.facebook.com/sharer.php?u=http://la.gameflier.com/ep/howcom_20150804/index.html');});
	$('#gamer').click(function(){window.open('http://forum.gamer.com.tw/A.php?bsn=10616');});
	$('#exclusive').click(function(){window.open('http://la.gameflier.com/ep/wowha_20150728/index.html');});
	
    $("#btn1").click(function(){ 
	      $("#content1").fadeIn();
		  $(".close").show();
		  $("#content2,#content3,#content4,#content5").hide();
    });
    $("#btn2").click(function(){ 
	      $("#content2").fadeIn();
		  $(".close").show();
		  $("#content3,#content4,#content5,#content1").hide();
    });
    $("#btn3").click(function(){ 
	      $("#content3").fadeIn();
		  $(".close").show();
	      $("#content4,#content5,#content1,#content2").hide();
	});
    $("#btn4").click(function(){ 
	      $("#content4").fadeIn();
		  $(".close").show();
	      $("#content1,#content2,#content3,#content5").hide();
	});
    $("#btn5").click(function(){ 
	      $("#content5").fadeIn();
		  $(".close").show();
		  $("#content1,#content2,#content3,#content4").hide();
    });
    $(".close").click(function(){ 
		  $("#content1,#content2,#content3,#content4,#content5,.close").hide();
    });

});
$(function(){
		var $htmlbody=$('html,body'),
	      $WINDOW=$(window);
	      $WINDOW.stellar({
		    horizontalScrolling: false,
		    verticalOffset: 0,
		    horizontalOffset: 0
	});
    $('#btn1,#btn2,#btn3,#btn4,#btn5').click(function(){
		 $htmlbody.animate({scrollTop:"850"},1000);
	});
});