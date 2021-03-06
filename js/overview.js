
$(document).ready(function() {

    /* click event handler for returning to the portfolio */
    $('#overview-return').click(function (e) {
        move_panorama(0)
        $('body').css('overflow-y', 'scroll')
    })

})

/* align the project overview with the current view */
function align_project_overview () {
    var scroll_height = $(window).scrollTop() -$('#intro').height();
    $('#overview').css('margin-top', scroll_height);
}

/* populate the overview-page with project information */
function display_project (project) {
    // add, date, title and project image
    $('#overview-title').text(project.title)
    $('#overview-date').text(project.date)
    $('#overview-image-1').attr('src', project.image_url_1)
    $('#overview-image-2').attr('src', project.image_url_2)

    // set color scheme
    $('#overview').css('background-color', project.color.supplementary)
    $('#overview-return').css('color', project.color.main)
    $('#overview-title').css('color', project.color.main)

    // add each paragraph of the description
    $('#overview-description').text('')
    project.description.forEach((par) => {
        $('#overview-description').append(
            $('<p/>').html(par)
        )
    })
    // add each paragraph of the statement of contribution
    // $('#overview-contribution').text('')
    // project.contribution.forEach((par) => {
    //     $('#overview-contribution').append(
    //         $('<p/>').html(par)
    //     )
    // })
    // add each paragraph of the statement of contribution
    $('#overview-team').text('')
    project.team.forEach((member) => {
        $('#overview-team').append(
            $('<p/>', {
                class: 'no-margin',
                text: `• ${member}`
            })
        )
    })

}
