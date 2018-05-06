
$(document).ready(function() {

    /* add all projects as soon as the page loads */
    projects.forEach(function (project) {
        add_project(project)
    })

})

/* add the passed project to the list in the legend-section */
function add_project(project) {
    var item = $('<div/>', {
        class: 'legend-list-item',
    })
    var header = $('<p/>', {
        class: 'legend-list-header',
        text: project.title
    })
    var desc = $('<p/>', {
        class: 'legend-list-summary',
        text: project.summary
    })
    var border = $('<div/>', {
        class: 'legend-list-item-border'
    })

    // set the border color
    border.css('border-color', hex2rgba(project.colorhex, 0.7))

    // add click event listener
    border.click(function (e) {
        align_project_overview()
        move_panorama(-$('#legend').width())
        $('body').css('overflow-y', 'hidden')
    })

    // assemble the complete list item and add it tot the list
    item.append(
        border.append(
            header,
            desc
        )
    ).appendTo('#legend-project-list')
}

/* move the `panorama` div */
function move_panorama (offset) {
    $('#panorama').css({ 'right': '0px', 'left': '' }).animate({
        'margin-left' : offset
    }, 'slow');
}

/*
*  Based on:
*       Source: https://stackoverflow.com/a/47201559
*       Author: Chrillewoodz
*/
function hex2rgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    if (alpha) {
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
}
