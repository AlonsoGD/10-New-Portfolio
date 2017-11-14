$(document).ready(function () {
    var $buttons = $('button');
    var $buttonsArray = [$('#aboutb'), $('#skillsb'), $('#portfoliob'), $('#didbeforeb'), $('#contactb')];
    var $screensArray = [$('#mainpage'), $('#aboutme'), $('#skills'), $('#porfolio'), $('#previousexp'), $('#contact')];
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

    function hideAllPages() {
        for (var i = 1; i < $screensArray.length; i++) {
            $screensArray[i].hide();
        }
    }
       
    
    // MAIN PAGE //
    hideAllPages();
    $titles.addClass('animated fadeInUp');
    introAnimation();
    
    
    //Click animations for the buttons;
    $buttons
        .mousedown(function() {
            $(this).addClass('clicked');
        })
        .mouseup(function() {
            $(this).removeClass('clicked');
        })
    
    $buttonsArray[0].click(function (){
        $screensArray[0].hide();
        $screensArray[0].css('opacity', '0');
        $screensArray[1].show();
        $screensArray[1].css('opacity', '1');
    })

    
})