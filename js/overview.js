
$(document).ready(function() {

    /* click event handler for returning to the legend */
    $('#overview-return').click(function (e) {
        move_panorama(0)
        $('body').css('overflow-y', 'scroll')
    })

    display_project(projects[0])
})

/* populate the overview-page with project information */
function display_project (project) {
    // add, date, title and project image
    $('#overview-title').text(project.title)
    $('#overview-date').text(project.date)
    $('#overview-image').attr('src', project.image_url)
    // add each paragraph of the description
    project.description.forEach((par) => {
        $('#overview-description').append(
            $('<p/>', {
                text: par
            })
        )
    })
    // add each paragraph of the statement of contribution
    project.contribution.forEach((par) => {
        $('#overview-contribution').append(
            $('<p/>', {
                text: par
            })
        )
    })
    // add each paragraph of the statement of contribution
    project.team.forEach((member) => {
        $('#overview-team').append(
            $('<p/>', {
                class: 'no-margin',
                text: `• ${member}`
            })
        )
    })

}
