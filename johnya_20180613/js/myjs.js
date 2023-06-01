$(document).ready(function() {
    /*niceScroll*/
    //$("html").niceScroll({ cursorwidth: "8px", mousescrollstep: 50, scrollspeed: 50 });
    $("html").niceScroll({ cursorcolor: "rgb(230, 28, 72)" ,cursorborder: "0px solid #fff",cursorwidth: "8px", mousescrollstep: 50, scrollspeed: 50, zindex: 999,horizrailenabled:false });
    //$("html").niceScroll({ styler: "fb", cursorcolor: "#6f1602", autohidemode: false, cursorborder: "0px solid #fff", cursorwidth: "8px", zindex: 999 });
    /*endniceScroll*/
$("html").css({"overflow-x":"hidden"});
    /*allheight*/
    var domminheight = $(window).height() - 35;
    $("body").css("min-height", domminheight);
    /*endallheight*/

    $(".loginbtn").click(function() {
            $.colorbox({
                iframe: true,
                href:"login.html",
                width: 980, //燈箱中間區塊的寬度
                height: 420, //燈箱中間區塊的高度
            });
        });

    /*animatetop*/
    $(".top").click(function() {
        $('html,body').animate({ scrollTop: 0 }, 300);
    });
    /*endanimatetop*/

    /*clicklink*/
    $(".gf-gift").click(function() { window.open(""); });
    /*endclicklink*/

    /*linkhashanimate*/
    $(function() {

        $(".awardlistbtn a").click(function() {
            var target = $(this.hash);
            $("html,body").animate({
                scrollTop: target.offset().top
            }, 500);
            return false;
        });
    });
    /*endlinkhashanimate*/
$('.content').waypoint(
        function(direction) {
            if (direction == 'down') {
                $(".peo4").removeClass("outpicleft");
                $(".peo5").removeClass("outpicright");
            } else if (direction == 'up') {
                $(".peo4").addClass("outpicleft");
                $(".peo5").addClass("outpicright");
            }
        }, {
            offset: '45%'
        }
    );
	
        $('body').snowfall({
            image: "images/flake-",
            minSize: 5,
            maxSize: 30,
            flakeCount: 30,
            flakeIndex: 10
        });	
});
