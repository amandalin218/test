
$(document).ready(function() {
		// 預設顯示第一個 Tab 
		var _showTab =0;
		//var $defaultLi = $('ul li').eq(_showTab).addClass('active');
		var $defaultLi = $('ul#actionbox li').eq(_showTab).css('background-position','0 -71px');
		$($defaultLi.find('a').attr('href')).siblings().hide();
		
		// 當 li 頁籤被點擊時...
		// 若要改成滑鼠移到 li 頁籤就切換時, 把 click 改成 mouseover
		$('ul#actionbox li').click(function() {
			// 找出 li 中的超連結 href(#id)
			var $this = $(this),
				_clickTab = $this.find('a').attr('href');
			// 把目前點擊到的 li 頁籤加上 .active
			// 並把兄弟元素中有 .active 的都移除 class
			//$this.addClass('active').siblings('.active').removeClass('active');
			$('ul#actionbox li').removeAttr('style')
			$this.css('background-position','0 -71px');
			// 淡入相對應的內容並隱藏兄弟元素
			$(_clickTab).stop(false, true).fadeIn().siblings().hide();

			return false;
		}).find('a').focus(function(){
			this.blur();
		});
		//
	  $("#various2").fancybox({	
				'width'   		    : 850,
				'height'  		    : 850,
				'autoScale'  	    : false,		
				'padding'			: 0,
				'transitionIn'		: 'fade',
				'transitionOut'		: 'fade',
				'type'				: 'iframe'
			});
	  $("#various3").fancybox({	
				'width'   		    : 850,
				'height'  		    : 850,
				'autoScale'  	    : false,		
				'padding'			: 0,
				'transitionIn'		: 'fade',
				'transitionOut'		: 'fade',
				'type'				: 'iframe'
			});
	 $("#various4").fancybox({
				'width'   			: 850,
				'height'   			: 580,
				'autoScale'   		: false,			
				'padding'			: 0,
				'transitionIn'		: 'fade',
				'transitionOut'		: 'fade',
				'type'				: 'iframe'
			});
			
	
});

$(function(){
	$(window).scroll(function(){
		var $this = $(this);
		var targetTop = $(this).scrollTop();
		var height = $(window).height();
		
		if (targetTop >=800){
			$(".btnbg").addClass("btnbgfixed");
			$(".empty-placeholder").removeClass("hidden");

		}else{
			$(".btnbg").removeClass("btnbgfixed");
			$(".empty-placeholder").addClass("hidden");

		}

	})
}());
