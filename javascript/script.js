$('.carousel').carousel({
    interval: 5000
});



$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $(".fixed-content")
            .css("background-color", "white")
            .css("border-bottom", "2px inset #f2f2f2");
    } else {
        $(".fixed-content")
            .css("background-color", "transparent")
            .css("border-bottom", "none");
    }
});