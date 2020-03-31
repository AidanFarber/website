$(".nav-link").click(function() {
    // e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top - 83
    }, 20);
});


// $(window).scroll(function() {
//     if (isInView("#home")) { window.history.pushState("state", "title", "/"); return; }
//     if (isInView("#about")) { window.history.pushState("state", "title", "#about"); return; }
//     if (isInView("#projects")) { window.history.pushState("state", "title", "#projects"); return; }
// });

// function isInView(elem) {
//     var $elem = $(elem);
//     var $window = $(window);

//     var docViewTop = $window.scrollTop();
//     var docViewBottom = docViewTop + $window.height();

//     var elemTop = $elem.offset().top;
//     var elemBottom = elemTop + $elem.height();

//     return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
// }
