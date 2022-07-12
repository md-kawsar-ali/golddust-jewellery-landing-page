// Global variables
const spotlightDiameter = 280;

// Verify that the mouse event wasn't triggered by a descendant.
function verifyMouseEvent(e, elem) {
    e = e || window.event;
    let related = e.relatedTarget || e.toElement;

    while ((related != undefined) &&
        (related != elem) &&
        (related.nodeName != 'BODY')) {
        related = related.parentNode;
    }
    return (related != elem);
}


// Create the spotlight
function createSpotlight() {
    $('.spotlight').width(spotlightDiameter + 'px')
        .height(spotlightDiameter + 'px')
}


// Mousemove
$('.hero').on('mousemove', function (e) {
    const center = {
        x: e.pageX - this.offsetLeft,
        y: e.pageY - this.offsetTop
    };
    const x = center.x - (spotlightDiameter >> 1);
    const y = center.y - (spotlightDiameter >> 1);

    $('.spotlight').css({
        left: x + 'px', top: y + 'px',
        backgroundPosition: -x + 'px ' + -y + 'px'
    }).show();
});


// Mouseover
$('.hero').on('mouseout', function (e) {
    if (!verifyMouseEvent(e, this)) return;
    $('.spotlight').hide();
});


$(document).ready(function () {
    createSpotlight();
});