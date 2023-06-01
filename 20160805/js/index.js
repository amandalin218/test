$(function(){
	$('.logo').click(function(){window.open('http://world2.gameflier.com/default.htm');});
	$('.css_btn_class').click(function(){window.open('http://world2.gameflier.com/news/news_in.asp?ID=3781');});
	
    $(".btn1").click(function(){ 
	      $("#main3").fadeIn();
		  $("#main4").hide();
    });
    $(".btn2").click(function(){ 
	      $("#main4").fadeIn();
		  $("#main3").hide();
    });
    $(".close").click(function(){ 
	      $("#main4").hide();
		  $("#main3").hide();
    });
    $(".css_btn_class2").click(function(){ 
	      $("#main6").fadeIn();
		  $("#main7,#main8").hide();
    });
    $(".css_btn_class3,.abb").click(function(){ 
	      $("#main7").fadeIn();
		  $("#main6,#main8").hide();
    });
    $(".jj1,.jj2").click(function(){ 
	      $("#main8").fadeIn();
		  $("#main6,#main7").hide();
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