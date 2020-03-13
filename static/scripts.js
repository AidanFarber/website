function scrollWithNav() { 
    $('html, body').animate({
        scrollTop: $("#about").offset().top - $("#mainNav").height()
    }, 1000);
}