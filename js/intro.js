$(document).ready(function() {

    // scroll to portfolio on click
    $('#intro-chevron').click(function() {
        $('html, body').animate({
            scrollTop: $('#intro').height()
        }, 'slow')
    })

    // fadeIn/fadeOut effect on chevron based on scrolldistance
    $(window).scroll(function() {
        if ($(document).scrollTop() > $('#intro').height()/2) {
            $('#intro-chevron').fadeOut('3000')
        } else {
            $('#intro-chevron').fadeIn('3000')
        }
    })

})
