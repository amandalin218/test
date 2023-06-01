$(function(){
	$('.logo').click(function(){window.open('http://apps.gameflier.com/TC/');});
	$('.fb').click(function(){window.open('https://www.facebook.com/tc.gameflier');});
	$('.fbshare').click(function(){window.open('http://www.facebook.com/sharer.php?u= http://apps.gameflier.com/TC/action/20180816_Mycardtw/index.html');});
	$('.save').click(function(){window.open('https://gf2.gameflier.com/mobile/billing/tc/');});
	$('.btn').click(function(){
	$('html,body').animate({scrollTop:$('.content').offset().top}, 800);
	});
	  $(function($) {
		// 當 hash 改變時 callback 用
		function load(num) {
			$('.content').load( num +".html");
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
});