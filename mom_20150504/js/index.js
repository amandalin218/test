$(function(){
		var $htmlbody=$('html,body'),
	      $WINDOW=$(window);
	      $WINDOW.stellar({
		    horizontalScrolling: false,
		    verticalOffset: 0,
		    horizontalOffset: 0
	});
	    $('#logo').click(function(){
		    window.open('http://la.gameflier.com/');
	});
	    $('#FB').click(function(){
		    window.open('https://www.facebook.com/la.gameflier/');
	});
	    $('#share').click(function(){
		    window.open('http://www.facebook.com/sharer.php?u=http://la.gameflier.com/action/mom_20150504/index.html/');
	});
	    $('#gamebase').click(function(){
		window.open('http://www.gamebase.com.tw/forum/60506/');
	});
	    $('#gamer').click(function(){
		window.open('http://forum.gamer.com.tw/A.php?bsn=10616/');
	});
	    $('#account').click(function(){
		window.open('https://gfb.gameflier.com/Billing/account/LA/index2.asp?SourceID=2&Game=LA/');
	});
	    $('#download').click(function(){
		window.open('http://la.gameflier.com/download/download1.aspx');
	});
        $('#btn1').click(function(){
		 $htmlbody.animate({scrollTop:"600"},1000);
	});
        $('#btn2').click(function(){
		 $htmlbody.animate({scrollTop:"1550"},1000);
	});
        $('#btn3').click(function(){
		 $htmlbody.animate({scrollTop:"3000"},1000);
	});
        $('#top').click(function(){
		 $htmlbody.animate({scrollTop:"0"},1000);
	});
	    $('#im_s').click(function(){
		   $("#im").fadeIn(800);
	});
	    $('.close').click(function(){
		   $("#im").fadeOut(800);
	});
	

	    $(window).scroll(function(){	
			var NN = $(window).scrollTop();
				if( NN >100){
					 $("#people,#title,#download,#account").stop(true,false).animate({opacity:0},800);}
				else{$("#people,#title,#download,#account").stop(true,false).animate({opacity:1},800);}
				
				if( NN >100 && NN <1300){
					$("#content1").fadeIn(800);
					}
				else{
					$("#content1").fadeOut();
					}
				if( NN >1000 && NN <2600){
					$("#content2").fadeIn(800);
					}
				else{
					$("#content2").fadeOut();}
				if( NN >2300){
					$("#content3").fadeIn(800);
					}
				else{
					$("#content3").fadeOut();
					}
					 
				if( NN >200){
					$("#top").fadeIn(800);
					}
				else{
					$("#top").fadeOut();
					}
	});
	


});