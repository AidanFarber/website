function scrollWithNav() { 
    var element = document.getElementById('targetElement');
    var headerOffset = 90;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition - headerOffset;
    
    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}