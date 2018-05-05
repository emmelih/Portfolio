$(document).ready(function() {

    // scroll to legend on click
    $('#intro-chevron').click(function() {
        console.log($('#intro').height())
        $('html, body').animate({
            scrollTop: $('#intro').height()
        }, 'slow')
    })

})
