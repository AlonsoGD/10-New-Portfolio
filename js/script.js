$(document).ready(function () {
    var $buttons = $('button');
    var $buttonsArray = [$('#aboutb'), $('#skillsb'), $('#portfoliob'), $('#didbeforeb'), $('#contactb')];
    var $titles =  $('.titles');

    function introAnimation () {
        
        function animationWithTimeout (element, delay) {
            setTimeout(function () {
                element.css('opacity', '1');
                element.addClass('animated fadeInRight');
            }, delay);
        }

        var delay = 500;  
        for (var i = 0; i < $buttonsArray.length; i++) {
            animationWithTimeout($buttonsArray[i], delay);
            delay += 100;
        };
    }
   
    $titles.addClass('animated fadeInUp');
    introAnimation();

    //Click animations for the buttons;
    $buttons
        .mousedown(function() {
            $(this).addClass('clicked');})
        .mouseup(function() {
            $(this).removeClass('clicked');
    })


})