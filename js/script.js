$(document).ready(function () {
    var $buttons = $('button');
    var $screens = $('.screen');
    var $buttonsArray = [$('#aboutb'), $('#skillsb'), $('#portfoliob'), $('#didbeforeb'), $('#contactb')];
    var $screensArray = [$('#mainpage'), $('#aboutme'), $('#skills'), $('#porfolio'), $('#previousexp'), $('#contact')];
    var $titles =  $('.titles');
    var $homeButton = $('#homeb-aboutme');
    var $homeButtons = $('.homebutton');

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
        hideElement($screens);
    }

    function goBack () {
        hideAllPages();
        showElement($screensArray[0])
    }

    function hideElement (element) {
        element.hide();
        element.css('opacity', '0');
    }
    
    function showElement (element) {
        element.show();
        element.css('opacity', '1');
    }
       
    // MAIN PAGE //
    hideAllPages();
    showElement($('#mainpage'));
    $titles.addClass('animated fadeInUp');
    introAnimation();
        
    //Click listeners for the animations and page changes
    $buttons
        .mousedown(function() {
            $(this).addClass('clicked');
        })
        .mouseup(function() {
            $(this).removeClass('clicked');
        })
    
    //Clicking about me button
    $buttonsArray[0].click(function (){
        hideElement($screensArray[0]);
        showElement($screensArray[1]);
        showElement($homeButton);
        $homeButton.addClass('animated fadeInLeft');
    })

    //Clicking skills button
    $buttonsArray[1].click(function (){
        hideElement($screensArray[0]);
        showElement($screensArray[2]);
        showElement($homeButton);
        $homeButton.addClass('animated fadeInLeft');
    })
    //Clicking porfolio button
    $buttonsArray[2].click(function (){
        hideElement($screensArray[0]);
        showElement($screensArray[3]);
        showElement($homeButton);
        $homeButton.addClass('animated fadeInLeft');
    })
    //Clicking previous experience button
    $buttonsArray[3].click(function (){
        hideElement($screensArray[0]);
        showElement($screensArray[4]);
        showElement($homeButton);
        $homeButton.addClass('animated fadeInLeft');
    })
    //Clicking contact button
    $buttonsArray[4].click(function (){
        hideElement($screensArray[0]);
        showElement($screensArray[5]);
        showElement($homeButton);
        $homeButton.addClass('animated fadeInLeft');
    })

    //Clicking any of the BACK buttons;
    $homeButtons.click(goBack);

})