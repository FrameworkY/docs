/*
==============================
TEMPLATE - TWOSIDE
==============================
*/
function openSection(i) {
    $.fn.openSection(i);
}
function closeSection() {
    $.fn.closeSection();
}
(function ($) {
    var index;
    $.fn.openSection = function (i) {
        index = i;
        $(".center-box").animate({ opacity: '0' }, 200, function () {
            $(".half-side.right").css("border-left", "1px solid rgba(77, 77, 77, 0.75)");
        });
        $(".half-side.left").animate({ marginLeft: '-450px' }, 600);
        $(".half-side.right").animate({ marginRight: '-450px' }, 600, function () {
            $("#twosides-main .section").css("display", "");
            $("#twosides-main .section").eq(index).css("display", "table");
            setPosMiddle(".center-box .content");
            $("#twosides-main .section").eq(index).animate({ opacity: '1' }, 600);
            $(".close-button").css("display", "block");
            $(".close-button").animate({ opacity: '1' }, 600);
            $(".center-bg").animate({ opacity: '0.6' }, 600);
        });
        $(".sec-twoside").addClass("twoside-opened");
    }
    $.fn.closeSection = function () {
        $(".section:eq(" + index + "),.close-button,.center-bg").animate({ opacity: '0' }, 600, function () {
            $(".half-side.right").animate({ marginRight: '0px' }, 600);
            $(".half-side.left").animate({ marginLeft: '0px' }, 600, function () {
                $(".sec-twoside").removeClass("twoside-opened");
            });
            $(".half-side.right").css("border-left", "none");
        });
    }
    function setPosMiddle(target) {
        var th = $("header").outerHeight();
        var h = parseInt($(".sec-twoside").outerHeight());
        $(target).each(function () {
            var sh = parseInt($(this).outerHeight());
            if (sh < h) $(this).css("margin-top", "-" + ((sh / 2) + (th / 2)) + "px");
        });
    }
    $(".twoside-open").click(function () {
        $.fn.openSection($(this).index());
    });
    $(".close-button").click(function () {
        $.fn.closeSection();
    });

    $(document).ready(function () {
        setPosMiddle(".half-side .content,.center-box .content");
    });
}(jQuery));