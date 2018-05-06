
$(document).ready(function() {

    /* click event handler for returning to the legend */
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
    $('#overview-image').attr('src', project.image_url)

    // add each paragraph of the description
    $('#overview-description').text('')
    project.description.forEach((par) => {
        $('#overview-description').append(
            $('<p/>', {
                text: par
            })
        )
    })
    // add each paragraph of the statement of contribution
    $('#overview-contribution').text('')
    project.contribution.forEach((par) => {
        $('#overview-contribution').append(
            $('<p/>', {
                text: par
            })
        )
    })
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
