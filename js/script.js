$(document).ready(function () {
    var $allButtons = $('button');
    var $allScreens = $('.screen');
    var $allHomeButtons = $('.homebutton');
    var $buttonsObj = {
        aboutmeb : $('#aboutb'),
        skillsb : $('#skillsb'), 
        portfoliob : $('#portfoliob'), 
        previousexpb : $('#didbeforeb'), 
        contactb : $('#contactb')
    };
    var $screensObj = {
        mainpage : $('#mainpage'),
        aboutme : $('#aboutme'), 
        skills : $('#skills'), 
        portfolio : $('#porfolio'), 
        previusexp : $('#previousexp'), 
        contact : $('#contact'),
    };
    var $titles =  $('.titles');

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
        for (var key in $buttonsObj) {
            if ($buttonsObj.hasOwnProperty(key)) {
                animationWithTimeout($buttonsObj[key], delay);
                delay += 100;
            }
        }
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
    $allButtons
        .mousedown(function() {
            $(this).addClass('clicked');
        })
        .mouseup(function() {
            $(this).removeClass('clicked');
        })
    
    //Clicking about me button
    $buttonsObj.aboutmeb.click(function (){
        hideElement($screensObj.mainpage);
        showElement($screensObj.aboutme);
    })

    //Clicking skills button
    $buttonsObj.skillsb.click(function (){
        hideElement($screensObj.mainpage);
        showElement($screensObj.skills);
    })
    //Clicking porfolio button
    $buttonsObj.portfoliob.click(function (){
        hideElement($screensObj.mainpage);
        showElement($screensObj.portfolio);
    })
    //Clicking previous experience button
    $buttonsObj.previousexpb.click(function (){
        hideElement($screensObj.mainpage);
        showElement($screensObj.previusexp);
    })
    //Clicking contact button
    $buttonsObj.contactb.click(function (){
        hideElement($screensObj.mainpage);
        showElement($screensObj.contact);
    })
    //Clicking any of the BACK Buttons;
    $allHomeButtons.click(introAnimation);
})