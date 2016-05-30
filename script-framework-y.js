
$(document).ready(function () {
    try {
        if (typeof (Storage) !== "undefined") {
            if (localStorage.theme.length > 0) {
                var domain = window.location.hostname;
                if (domain.length == 0) domain = "file:///G:/Documenti-fede/Coding/PIXOR/My%20works/WEB/Framework%20Y/HTML/framework-y";
                else domain = "http://" + domain;

                $("<link/>", {
                    rel: "stylesheet",
                    type: "text/css",
                    href: domain + "/themes/" + localStorage.theme + "/theme.css"
                }).appendTo("footer");
            }
        }
    } catch (e) { }

    try {
        $('body').append('<div id="popup-ent-lcs" style="display:none" class="popup-banner full-width-bottom envato-popup" data-popup-anima="fade-bottom"><i class="fa fa-times popup-close"></i><b class="text-m">DEMO VERSION</b><br> Please register the product with your Envato purchase code to unlock all features. <br /><br /> <a class="btn btn-sm" href="http://www.framework-y.com/envato-licence.php"><b>REGISTER NOW</b></a></div>');
        if (!isEmpty(localStorage.ent_lcs) && localStorage.ent_lcs == "_act_lcs") {} else {
            setEntDm();
            self.setInterval(function () { setEntDm(); }, 10000);
        }
    } catch (e) {
        setEntDm(); self.setInterval(function () { setEntDm(); }, 10000);
    }

    function setEntDm() {
        var url = window.location.href;

        if (url.indexOf("themes.html") == -1 && url.indexOf("file:///") == -1) {
            var targets = '.documentation-button:not(.envato-free),.prettyprint,.documentation-table';

            $(targets).on("click", function () {
                $('#popup-ent-lcs').show();
                $(this).css("opacity", "0.4");
            });
            $('#popup-ent-lcs .popup-close').on("click", function () {
                $('#popup-ent-lcs').hide();
            });
            $('body').on("contextmenu", function () {
                $('#popup-ent-lcs').show();
                return false;
            });
            $(targets).attr("href", "#");
            $(targets).removeAttr("download");
            $(targets).removeAttr("target");
            $(targets).attr('unselectable', 'on').css('user-select', 'none').on('selectstart', false);
        }
    }
});
function activateTheme(name) {
    localStorage.setItem("theme", name);
    $('#popup-theme-activated').showPopupBanner();
}


(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date(); a = s.createElement(o),
    m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-75816862-1', 'auto');
ga('send', 'pageview');