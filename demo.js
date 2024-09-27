$(document).ready(function() {

    $('.counter').each(function () {
$(this).prop('Counter',0).animate({
    Counter: $(this).text()
}, {
    duration: 12000,
    easing: 'swing',
    step: function (now) {
        $(this).text(Math.ceil(now));
    }
});
}); 

});  

window.addEventListener('DOMContentLoaded',()=>
    {
        VANTA.BIRDS({
            el: "#hi ",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 100.00,
            minWidth: 100.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0xffffff,
            colorMode: "lerpGradient",
            quantity: 2.00
          })

        
    })
