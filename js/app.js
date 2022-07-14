/*=========================================
                Spotlight
===========================================*/
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

/*=========================================
                Slider
===========================================*/
$('.review-slider').slick({
    dots: true,
    infinite: false,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 15000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'ease',
    pauseOnHover: true,
});

/*=========================================
                Contact Form
===========================================*/
const sendMail = () => {
    const getName = jQuery('#name').val();
    const getEmail = jQuery('#email').val();
    const getPhone = jQuery('#phone').val();
    const getMessage = jQuery('#message').val();

    if (getName !== '' && getEmail !== '' && getPhone !== '' && getMessage !== '') {
        jQuery('#emailSendResult').html('Loading...');
        $.ajax({
            url: 'submitForm.php',
            data: { name: getName, email: getEmail, phone: getPhone, message: getMessage },
            method: 'POST',
            success: function (data) {
                jQuery('#emailSendResult').html(`<span class="text-success">${data}</span>`);
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('phone').value = '';
                document.getElementById('message').value = '';
            },
            error: function () {
                jQuery('#emailSendResult').html(`<span class="text-danger">Something went wrong!</span>`);
            }
        });
    } else {
        jQuery('#emailSendResult').html(`<span class="text-warning">Please, enter required fields!</span>`);
    }
}