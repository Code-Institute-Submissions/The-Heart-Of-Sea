$(document).scroll(function () {

    $('nav').toggleClass('scrolled', $(this).scrollTop() > $('nav').height());

});