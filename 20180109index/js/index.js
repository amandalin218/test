// JavaScript Document
$(document).ready(function() {
	$('.share').click(function(){window.open('http://www.facebook.com/sharer.php?u=http://action.gameflier.com/action/happyny_20180206/index.html');});
	$(".btn1,.btn2,.btn5,.btn6,.btn9").click(function(){
        $(".main").animate({height:'1288px'});

    });
    $('.btn3,.btn7,.btn8').click(function() {
            $("#sh1").slideUp(300);
            setTimeout(function(){location.href ="#";},300);
    });
	$(".btn3,.btn7,.btn8").click(function(){
        $(".main").animate({height:'850px'});

    });

});
$(function($) {
    // 當 hash 改變時 callback 用
    function load(num) {
    $('.main2').load(num + ".html");
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
$(function() {
    var $htmlbody = $('html,body'),
        $WINDOW = $(window);
    $WINDOW.stellar({
        horizontalScrolling: false,
        verticalOffset: 0,
        horizontalOffset: 0
    });
    $('.btn1,.btn2,.btn4,.btn5,.btn6,.btn9').click(function() {
        $htmlbody.animate({ scrollTop: "850" }, 1000);
    });
    $('.top').click(function() {
        $htmlbody.animate({ scrollTop: "0" }, 1000);
    });
	$(".btn1").click(function(){   
		$(".pic2,.pic4,.pic5,.pic6,.pic9").hide();
		$(".pic1").fadeIn();
    });
	$(".btn2").click(function(){   
		$(".pic1,.pic4,.pic5,.pic6,.pic9").hide();
		$(".pic2").fadeIn();
    });
	$(".btn4").click(function(){   
		$(".pic1,.pic2,.pic5,.pic6,.pic9").hide();
		$(".pic4").fadeIn();
    });
	$(".btn5").click(function(){   
		$(".pic1,.pic2,.pic4,.pic6,.pic9").hide();
		$(".pic5").fadeIn();
    });
	$(".btn6").click(function(){   
		$(".pic1.pic2,.pic4,.pic5,.pic9").hide();
		$(".pic6").fadeIn();
    });
	$(".btn9").click(function(){   
		$(".pic1.pic2,.pic4,.pic5,.pic6").hide();
		$(".pic9").fadeIn();
    });
	$(".btn3,.btn7,.btn8").click(function(){   
		$(".pic1,.pic2,.pic4,.pic5,.pic6,.pic9").hide();
    });
	
});



