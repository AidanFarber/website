$(".nav-link").click(function() {
    // e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top - 90
    }, 20);
});