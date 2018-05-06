
$(document).ready(function() {

    /* click event handler for returning to the legend */
    $('#overview-return').click(function (e) {
        move_panorama(0)
        $('body').css('overflow-y', 'scroll')
    })

})
