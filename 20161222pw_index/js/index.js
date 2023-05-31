
$(document).ready(function(e){ 
	 $(".b1").hover(function() {
	    	 $(this).css("background-position","bottom left");
	    	 }, function() {
             $(this).css("background-position","top left");
             });
	 $(".b2").hover(function() {
	    	 $(this).css("background-position","bottom right");
	    	 }, function() {
             $(this).css("background-position","top right");
             });
  	 $(".b1").click(function(){   
			 $("#bg").fadeOut();
			 $(".close").fadeIn();
			 $("#bg2").fadeOut();
			 $("#bg1").fadeIn();
  			 });
  	 $(".b2").click(function(){   
			 $("#bg").fadeOut();
			 $(".close").fadeIn();
			 $("#bg1").fadeOut();
			 $("#bg2").fadeIn();
  			 });
});

$(function($) {
		// 當 hash 改變時 callback 用
		function load(num) {
			if(num == 1) {
				$('#content').load("page" + num +".html");
				$("#bg1").fadeIn();
				$(".close").fadeIn();
			}

			else if(num == 2){
				$('#content').load("page" + num +".html");
				$("#bg2").fadeIn();
				$(".close").fadeIn();
			}
		}
		
		// 初始化 $.history
        $.history.init(function(url) {
			load((url == "") ? "0" : url);

			// A ? B : C

			// if (A) {
			// 	B
			// }
			// else {
			// 	C
			// }

			// if (url == "") {
			// 	"0";
			// }
			// else {
			// 	url;
			// }

			// if (url == "") {
			// 	load("0");
			// }
			// else {
			// 	load(url);
			// }
		});
		
		// 當點擊 #ajax-links 中的超連結時
		$('#ajax-links a').live('click', function(e) {
			var url = $(this).attr('href');
			// 取得 #hash 去除掉 # 後的值
			url = url.replace(/^.*#/, '');
			// 載入
			$.history.load(url);
			return false;
		});
});
