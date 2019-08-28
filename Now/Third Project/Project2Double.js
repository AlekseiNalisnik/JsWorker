// JQUERY

$(document).ready(function() {
    $('.row ul li:eq(1) a, .row:eq(1) .text-center').on('click', function() {
        $('.overlay').fadeIn('slow');
        $('.modal').slideDown('slow');
    });
    
    $('.modal .close').on('click', function() {
        $('.overlay').fadeOut('slow');
        $('.modal').slideUp('slow');
    });
});
