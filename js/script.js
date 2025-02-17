!function(e) {
    "use strict";
    function a(e, a) {
        var s = e;
        !0 === (!0 === a || "open" === a || 1 === a) ? s.slideDown(600) : (s.slideUp(500),
        s.find("li.nav-opened").removeClass("nav-opened").children("ul").slideUp(300))
    }
    function s() {
        l.width() > 767 ? (v.removeClass("nav-mobile"),
        v.find(".has-children").removeClass("nav-opened").children("ul").removeAttr("style")) : v.addClass("nav-mobile")
    }
    var l = e(window)
      , t = e("body");
    "ontouchstart"in document.documentElement || t.addClass("no-touch");
    var i = e(".is-sticky");
    if (i.length > 0) {
        var n = e("#mainnav").offset();
        l.scroll(function() {
            var e = l.scrollTop();
            l.width() > 991 && e > n.top + 4 ? i.hasClass("has-fixed") || i.addClass("has-fixed") : i.hasClass("has-fixed") && i.removeClass("has-fixed")
        })
    }
    var o = e("#slider");
    o.length > 0 && o.carousel({
        interval: 6e3,
        pause: "null"
    });
    var r = e(".has-carousel");
    r.length > 0 && r.each(function() {
        var a = e(this)
          , s = a.data("items") ? a.data("items") : 4
          , l = s >= 3 ? 3 : s
          , t = l >= 2 ? 2 : l
          , i = a.data("delay") ? a.data("delay") : 4e3
          , n = !!a.data("auto")
          , o = !!a.data("loop")
          , r = !!a.data("dots")
          , d = !!a.data("navs")
          , c = a.data("margin") ? a.data("margin") : 30;
        a.owlCarousel({
            navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
            items: s,
            loop: o,
            nav: d,
            dots: r,
            margin: c,
            autoplay: n,
            autoplayTimeout: i,
            autoplaySpeed: 700,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: t
                },
                768: {
                    items: l
                },
                1170: {
                    items: s
                }
            }
        })
    });
    var d = e(".logo-carousel");
    d.length > 0 && d.owlCarousel({
        items: 5,
        loop: !0,
        margin: 30,
        responsive: {
            0: {
                items: 2
            },
            379: {
                items: 3
            },
            720: {
                items: 4
            },
            1280: {
                items: 6
            }
        }
    });
    var c = e(".has-parallax");
    c.length > 0 && c.each(function() {
        e(this).parallaxie({
            speed: .3,
            offset: 0
        })
    });
    var h = window.location.href
      , u = h.split("#")
      , f = e(".nav li a");
    f.length > 0 && f.each(function() {
        h === this.href && "" !== u[1] && e(this).closest("li").addClass("active").parent().closest("li").addClass("active")
    });
    var v = e("#mainnav")
      , m = v.find("li")
      , g = v.find("a");
    s(),
    l.on("resize", function() {
        s()
    }),
    m.has("ul").addClass("has-children"),
    t.hasClass("no-touch") || v.find(".has-children").children("ul").hide(),
    m.on({
        mouseenter: function() {
            e(this).addClass("rollover")
        },
        mouseleave: function() {
            e(this).removeClass("rollover")
        }
    }),
    g.on("click", function() {
        if (v.hasClass("nav-mobile") || !t.hasClass("no-touch")) {
            var s = e(this)
              , l = s.parent()
              , i = s.attr("href");
            if (l.hasClass("has-children"))
                return l.hasClass("nav-opened") ? (l.removeClass("nav-opened"),
                "#" !== i || (a(l.children("ul"), "close"),
                !1)) : (l.addClass("nav-opened"),
                l.siblings().removeClass("nav-opened"),
                a(l.siblings().children("ul"), "close"),
                setTimeout(function() {
                    a(l.children("ul"), "open")
                }, 150),
                !1);
            if ("#" === i)
                return !1
        }
    });
    var p = e("#preloader");
    p.length > 0 && l.on("load", function() {
        p.children().fadeOut(300),
        p.delay(150).fadeOut(500),
        t.delay(100).css({
            overflow: "visible"
        })
    });
    var C = e(".scroll-to");
    C.length > 0 && C.on("click", function() {
        return e("html, body").animate({
            scrollTop: e(e.attr(this, "href")).offset().top
        }, 500),
        !1
    });
    var y = e(".imagebg");
    y.length > 0 && y.each(function() {
        var a = e(this)
          , s = a.parent()
          , l = a.data("overlay")
          , t = a.children("img").attr("src")
          , i = void 0 !== l && "" !== l && l.split("-");
        void 0 !== t && "" !== t && (s.hasClass("has-bg-image") || s.addClass("has-bg-image"),
        "" !== i && "dark" === i[0] && (s.hasClass("light") || s.addClass("light")),
        a.css("background-image", 'url("' + t + '")').addClass("bg-image-loaded"))
    });
    var b = e("#quote-request");
    if (b.length > 0) {
        if (!e().validate || !e().ajaxSubmit)
            return console.log("quoteForm: jQuery Form or Form Validate not Defined."),
            !0;
        if (b.length > 0) {
            var w = b.find("select.required")
              , x = b.find(".form-results");
            b.validate({
                invalidHandler: function() {
                    x.slideUp(400)
                },
                submitHandler: function(a) {
                    x.slideUp(400),
                    e(a).ajaxSubmit({
                        target: x,
                        dataType: "json",
                        success: function(s) {
                            var l = "error" === s.result ? "alert-danger" : "alert-success";
                            x.removeClass("alert-danger alert-success").addClass("alert " + l).html(s.message).slideDown(400),
                            "error" !== s.result && e(a).clearForm()
                        }
                    })
                }
            }),
            w.on("change", function() {
                e(this).valid()
            })
        }
    }
    var k = e(".filtered-menu");
    k.length > 0 && k.each(function() {
        var a = e(this).find("li")
          , s = e(this).next(".has-filtered");
        a.on("click", function() {
            a.removeClass("active"),
            e(this).addClass("active")
        }),
        s.length > 0 && l.on("load", function() {
            s.find("ul").filterizr({
                delay: 25
            })
        })
    });
    var F = e(".gallery-lightbox");
    F.length > 0 && F.magnificPopup({
        delegate: "a",
        type: "image",
        gallery: {
            enabled: !0
        },
        image: {
            titleSrc: function(e) {
                var a = ""
                  , s = e.el.find("img").attr("title")
                  , l = e.el.find("img").attr("alt");
                return void 0 !== s && "" !== s && (a += s),
                void 0 !== l && "" !== l && (void 0 === s || "" === s ? a += l : a = a + "<small>" + l + "</small>"),
                "" === a && (a = e.el.attr("title")),
                a
            }
        },
        zoom: {
            enabled: !0
        }
    });
    var T = e(".image-lightbox");
    T.length > 0 && T.magnificPopup({
        gallery: {
            enabled: !0
        },
        type: "image"
    });
    var j = e(".map-holder");
    if (j.length > 0) {
        new GMaps({
            div: "#gmap",
            lat: -12.043333,
            lng: -77.028333
        });
        j.on("click", function() {
            e(this).children().css("pointer-events", "auto")
        }),
        j.on("mouseleave", function() {
            e(this).children().css("pointer-events", "none")
        })
    }
    t.append('<div id="color-switch" class="colorPanel cp-custom"><a class="cart" href="https://themeforest.net/item/plumbing-plumber-and-repair-services-template/21067886?ref=ThemeSurf_TF" target="_blank"><i class="fa fa-cart-arrow-down fa-fw"></i></a><a id="cpToggle" href="#"><i class="fa fa-cog fa-spin fa-fw"></i></a><ul></ul></div>');
    var D = e("#color-switch");
    D.length > 0 && D.ColorPanel({
        styleSheet: "#style-css",
        animateContainer: ".site-body",
        colors: {
            "#FF9933": "css/style.css",
            "#2B9EFF": "css/style-blue.css",
            "#014FB4": "css/style-bluedark.css",
            "#ED1A24": "css/style-red.css",
            "#1551D4": "css/style-blueshade.css",
            "#0BB640": "css/style-green.css"
        }
    })
}(jQuery);
