$(document).ready(function () {
    var $buttons = $('button');
    var $allScreens = $('.screen');
    var $buttonsArray = [$('#aboutb'), $('#skillsb'), $('#portfoliob'), $('#didbeforeb'), $('#contactb')];
    var $screensObj = {
        mainpage : $('#mainpage'),
        aboutme : $('#aboutme'), 
        skills : $('#skills'), 
        portfolio : $('#porfolio'), 
        previusexp : $('#previousexp'), 
        contact : $('#contact'),
    };
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

        hideAllPages();
        showElement($screensObj.mainpage);
        $titles.addClass('animated fadeInUp');
        
        var delay = 500;  
        for (var i = 0; i < $buttonsArray.length; i++) {
            animationWithTimeout($buttonsArray[i], delay);
            delay += 100;
        };
        
    }

    function hideAllPages() {
        hideElement($allScreens);
    }

    function goBack () {
        hideAllPages();
        showElement($screensObj.mainpage)
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
        hideElement($screensObj.mainpage);
        showElement($screensObj.aboutme);
        showElement($homeButton);
        $homeButton.addClass('animated fadeInLeft');
    })

    //Clicking skills button
    $buttonsArray[1].click(function (){
        hideElement($screensObj.mainpage);
        showElement($screensObj.skills);
        showElement($homeButton);
        $homeButton.addClass('animated fadeInLeft');
    })
    //Clicking porfolio button
    $buttonsArray[2].click(function (){
        hideElement($screensObj.mainpage);
        showElement($screensObj.portfolio);
        showElement($homeButton);
        $homeButton.addClass('animated fadeInLeft');
    })
    //Clicking previous experience button
    $buttonsArray[3].click(function (){
        hideElement($screensObj.mainpage);
        showElement($screensObj.previusexp);
        showElement($homeButton);
        $homeButton.addClass('animated fadeInLeft');
    })
    //Clicking contact button
    $buttonsArray[4].click(function (){
        hideElement($screensObj.mainpage);
        showElement($screensObj.contact);
        showElement($homeButton);
        $homeButton.addClass('animated fadeInLeft');
    })

    //Clicking any of the BACK buttons;
    $homeButtons.click(introAnimation);

})