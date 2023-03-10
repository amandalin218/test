$(function(){
	$('.logo').click(function(){window.open('http://apps.gameflier.com/sw/');      });
	$('.line').click(function(){window.open('http://line.naver.jp/R/msg/text/?《十萬個冷笑話》超商儲MyCard!豪禮送乎你! http://apps.gameflier.com/sw/action/201606_mycard/index.html');      });
	$('.share').click(function(){window.open('http://www.facebook.com/sharer.php?u=http://apps.gameflier.com/sw/action/201606_mycard/index.html');      });
	$('.googleplay').click(function(){window.open('https://play.google.com/store/apps/details?id=com.gameflier.sw.google');      });
	$('.applestore').click(function(){window.open('https://itunes.apple.com/tw/app/id1012307394');      });
	$('.apkdownload').click(function(){window.open('http://apps.gameflier.com/sw/ReUrl/APK.aspx');      });
	
    $(".change").click(function(){ 
		   $("#content2").fadeIn();
		   $("#content1").hide();
    });
    $(".ok").click(function(){ 
		   $("#content1").fadeIn();
		   $("#content2").hide();
    });
    $(".close").click(function(){ 
		   $("#content1").hide();
		   $("#content2").hide();
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
    $('.change,.ok').click(function(){
		 $htmlbody.animate({scrollTop:"768"},1000);
	});
    $('.close').click(function(){
		 $htmlbody.animate({scrollTop:"0"},1000);
	});
	
});
