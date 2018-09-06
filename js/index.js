$(document).ready(function () {

    $('a[href*="#"]').click(function(){
        $('.main').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 500);
        return false;
    });

    
});