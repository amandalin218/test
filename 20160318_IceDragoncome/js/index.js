$(function(){
	$('#logo').click(function(){window.open('http://dn.gameflier.com/');});
	$('#account').click(function(){window.open('https://gf2.gameflier.com/account/aloneregister.aspx');});
	$('#download').click(function(){window.open('http://dn.gameflier.com/download/game.html');});	
	$('#fb').click(function(){window.open('https://www.facebook.com/dn.gameflier');});
	$('#base').click(function(){window.open('http://www.gamebase.com.tw/forum/60239/');});
	$('#share').click(function(){window.open('http://www.facebook.com/sharer.php?u=http://dn.gameflier.com/action/20160318_IceDragoncome/index.html');});
	$('#gamer').click(function(){window.open('http://forum.gamer.com.tw/A.php?bsn=13211');});
	
    $("#button1").click(function(){ 
	      $("#content1").fadeIn();
		  $("#content2").hide();
    });
    $("#button2").click(function(){ 
	      $("#content2").fadeIn();
		  $("#content1").hide();
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
    $('#button1,#button2').click(function(){
		 $htmlbody.animate({scrollTop:"768"},1000);
	});
    $('#top').click(function(){
		 $htmlbody.animate({scrollTop:"0"},1000);
	});
	
	$(window).scroll(function(){	
			var NN = $(window).scrollTop();
				if( NN >0 ){
					$("#content1,#content2").fadeIn(800);
					}
				else{
					$("#content1,#content2").fadeOut();
					}
					 
				if( NN >200){
					$("#top").fadeIn(800);
					}
				else{
					$("#top").fadeOut();
					}
	});

});
