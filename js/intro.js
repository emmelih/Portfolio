$(document).ready(function() {

    // scroll to legend on click
    $('#intro-chevron').click(function() {
        $('html, body').animate({
            scrollTop: document.body.scrollHeight
        }, 'slow')
    })

})
