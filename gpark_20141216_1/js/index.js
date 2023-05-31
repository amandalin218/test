$(function(){
	    $('#logo').click(function(){
         window.open('http://la.gameflier.com/');
    });

	    $('#download').click(function(){
         window.open('http://la.gameflier.com/download/download1.aspx');
    });
	    $('#account').click(function(){
         window.open('https://gfb.gameflier.com/Billing/account/LA/index2.asp?SourceID=2&Game=LA');
    });
	    $('#fb').click(function(){
         window.open('https://www.facebook.com/la.gameflier');
    });
	    $('#share').click(function(){
         window.open('http://www.facebook.com/sharer.php?u=http://la.gameflier.com/ep/gpark_20141216/index.html');
    });
	    $('#gamer').click(function(){
         window.open('http://forum.gamer.com.tw/A.php?bsn=10616');
    });
	    $('#gamebase').click(function(){
         window.open('http://www.gamebase.com.tw/forum/60506');
    });


});
$(document).ready(function(){
  $("#title").click(function(){
    $("#bg").fadeIn();
	$("#bg2").fadeOut();
	$("#bg3").fadeOut();
	$("#bg4").fadeOut();
	$("#pic1").show();
	$("#pic2").show();
	$("#pic3").show();
	$("#download").show();
	$("#account").show();
	$("#iframe").hide();
	$("#iframe2").hide();
	$("#iframe2a").hide();
	$("#iframe3").hide();
    $("#t2").show();
	$("#t2_a").hide();
	$("#t2_a1").hide();
	$("#t2_a2").hide();


  });
  $("#t1").click(function(){
    $("#bg2").fadeIn();
	$("#bg").fadeOut();
	$("#bg3").fadeOut();
	$("#bg4").fadeOut();
	$("#pic1").hide();
	$("#pic2").hide();
	$("#pic3").hide();
	$("#download").hide();
	$("#account").hide();
	$("#iframe").show();
	$("#iframe2").hide();
	$("#iframe3").hide();
	$("#iframe2a").hide();
    $("#t2").show();
	$("#t2_a").hide();
	$("#t2_a1").hide();
	$("#t2_a2").hide();


  });
  $("#t2").click(function(){
    $("#t2_a").show();
	$("#t2_a1").show();
	$("#t2_a2").show();
	$("#t2").hide();
    $("#bg3").fadeIn();
	$("#bg2").fadeOut();
	$("#bg").fadeOut();
	$("#bg4").fadeOut();
	$("#pic1").hide();
	$("#pic2").hide();
	$("#pic3").hide();
	$("#download").hide();
	$("#account").hide();
	$("#iframe2").show();
	$("#iframe").hide();
	$("#iframe3").hide();
	$("#iframe2a").hide();

  });
  
  
  $("#t2_a").click(function(){
    $("#t2").show();
	$("#t2_a").hide();
	$("#t2_a1").hide();
	$("#t2_a2").hide();
    $("#bg3").fadeIn();
	$("#bg2").fadeOut();
	$("#bg").fadeOut();
	$("#bg4").fadeOut();
	$("#pic1").hide();
	$("#pic2").hide();
	$("#pic3").hide();
	$("#download").hide();
	$("#account").hide();
	$("#iframe2").show();
	$("#iframe").hide();
	$("#iframe2a").hide();
	$("#iframe3").hide();

  });
  $("#t2_a1").click(function(){
	$("#iframe2").show();
	$("#iframe2a").hide();
  });
  $("#t2_a2").click(function(){
	$("#iframe2a").show();
	$("#iframe2").hide();
  });

 
  $("#t3").click(function(){
    $("#bg4").fadeIn();
	$("#bg3").fadeOut();
	$("#bg2").fadeOut();
	$("#bg").fadeOut();
	$("#pic1").hide();
	$("#pic2").hide();
	$("#pic3").hide();
	$("#download").hide();
	$("#account").hide();
	$("#iframe3").show();
	$("#iframe").hide();
	$("#iframe2").hide();
    $("#t2").show();
	$("#t2_a").hide();
	$("#t2_a1").hide();
	$("#t2_a2").hide();
	$("#iframe2a").hide();


  });
});

$(window).load(function(){
			 $('body').mousemove(function(e){
			 var _x=Math.floor(e.pageX*0.08-1);
			 var _y=Math.floor(e.pageX*0.02*-1);
		/*console.log(_x);*/
	 		$('#pic3').stop().css({marginLeft:_x+300}); 
			$('#pic2').stop().css({marginLeft:_y+350}); 
	 		});	

});



