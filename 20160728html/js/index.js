  $(document).ready(function() { 
	$('.mua ul li').hover(function(){
			$(this).stop().animate({backgroundPosition: "0px 0px"}, 300);
			}, function(){
			$(this).stop().animate({backgroundPosition: "0px 130px"}, 300);
		});
	$('.mub ul li').hover(function(){
			$(this).stop().animate({backgroundPosition: "0px 0px"}, 300);
			}, function(){
			$(this).stop().animate({backgroundPosition: "0px 130px"}, 300);
		});	
	$('.mua,.mub').click(function(){
		$('html,body').animate({scrollTop:$('#main3').offset().top}, 800);
	});
		$('.top2').click(function(){window.open('http://world2.gameflier.com/ep/201608_legend/index.html');}); 
		$('.top3').click(function(){window.open('http://world2.gameflier.com/action/201608_sale/index.html');}); 

	});
  $(function($) {
		// 當 hash 改變時 callback 用
		function load(num) {
			$('#main3').load( num +".html");
		}
		
		// 初始化 $.history
        $.history.init(function(url) {
			load(url == "" ? "0" : url);
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