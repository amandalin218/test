 $(function(){  
	    $('#logo').click(function(){
         window.open('http://al.gameflier.com');
    });
    });
	$(function(){
		// 幫 #account #download 加上 hover 事件
		$("#account a,#download a").hover(function(){
			// 滑鼠移進選項時..
			// 把背景圖片的位置往左移動
			var _this = $(this),
				_width = _this.width() * -1;
			_this.stop().animate({
				backgroundPosition: _width + "px 0"
			}, 200);
		}, function(){
			// 滑鼠移出選項時..
			// 把背景圖片的位置移回原位
			$(this).stop().animate({
				backgroundPosition: "0 0"
			}, 200);
		});
  });
  $(function(){
        $("#t1_all").hover(function() {
            $("#t1_a,#t1_1,#t1_2,#t1_3,#t1_4").fadeIn(300);
			} , function(){
				$("#t1_a,#t1_1,#t1_2,#t1_3,#t1_4").stop(true, true).fadeOut(300);
        });
  });
  $(function(){
        $("#t2").hover(function() {
            $("#t2_a").fadeIn(300);
			} , function(){
				$("#t2_a").stop(true, true).fadeOut(300);
        });
  });
  $(function(){
        $("#t4").hover(function() {
            $("#t4_a").fadeIn(300);
			} , function(){
				$("#t4_a").stop(true, true).fadeOut(300);
        });
  });
  $(function(){
        $("#t5_all").hover(function() {
            $("#t5_a,#t5_t1,#t5_t2").fadeIn(500);
			} , function(){
				$("#t5_a,#t5_t1,#t5_t2").stop(true, true).fadeOut(500);
        });
  });
  $(function(){
        $("#t6").hover(function() {
            $("#t6_1").fadeIn(300);
			} , function(){
				$("#t6_1").stop(true, true).fadeOut(300);
        });
  });
  $(function(){
	$('#t1_1').click(function(){window.open('http://al.gameflier.com/news/new_detail.aspx?id=2897');      });
	$('#t1_2').click(function(){window.open('http://al.gameflier.com/news/new_detail.aspx?id=2885#02');      });
	$('#t1_3').click(function(){window.open('http://al.gameflier.com/news/new_detail.aspx?id=2889');      });
	$('#t1_4').click(function(){window.open('http://al.gameflier.com/news/new_detail.aspx?id=2893#02');      });
	$('#t2').click(function(){window.open('http://al.gameflier.com/news/new_detail.aspx?id=2893#01');      });
	$('#t3').click(function(){window.open('http://gf.gameflier.com/action/03/index.asp?ID=642');      });
	$('#t4').click(function(){window.open('http://gf.gameflier.com/action/03/index.asp?ID=1053');      });	
	$('#t5_t1').click(function(){window.open('http://al.gameflier.com/news/new_detail.aspx?id=2883');      });
    $('#t5_t2').click(function(){window.open('http://al.gameflier.com/news/new_detail.aspx?id=2885#01');      });
    $('#t6').click(function(){window.open('http://al.gameflier.com/news/new_detail.aspx?id=2901');      });
	
  });