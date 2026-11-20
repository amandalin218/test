
$(document).ready(function(e){ 

});

$(function($) {
		// 當 hash 改變時 callback 用
		function load(num) {
			var $content = $('#content');
			// 切換頁面前先移除自訂捲軸，避免殘留的捲軸結構
			if ($content.data('mCS')) $content.mCustomScrollbar('destroy');
			$content.load("page" + num +".html", function() {
				// page5（法寶品階）內容較長，套用自訂捲軸
				if (num == "5" && $.fn.mCustomScrollbar) {
					$content.mCustomScrollbar({ theme: "light-thick" });
				}
			});
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
