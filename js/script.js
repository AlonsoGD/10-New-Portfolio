$(document).ready(function () {
    var $allButtons = $('button');
    var $allMainButtons = $('.mainbuttonskin');
    var $allBackButtons = $('.homebutton');
    var $allScreens = $('.screen');
    var $pagelayout = $('.pagelayout');
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
        contact : $('#contact')
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
    
    function hideElement (element) {
        element.hide();
        element.css('opacity', '0');
    }
    
    function showElement (element) {
        element.show();
        element.css('opacity', '1');
    }
    
    function toggleBackground () {
        $pagelayout.toggleClass('darken');
    }
    
    function hideMainPage () {
        hideElement($screensObj.mainpage);
        toggleBackground();
    }
    
    function goBack () {
        hideAllPages();
        showElement($screensObj.mainpage);
        toggleBackground();
    }

    // MAIN PAGE //

    introAnimation();
        
    //Click listeners for the animations and page changes
    //Animations when main menu buttons clicked
    $allButtons
        .mousedown(function() {
            $(this).addClass('clicked');
        })
        .mouseup(function() {
            $(this).removeClass('clicked');
        })
    
    //Clicking about me button
    $buttonsObj.aboutmeb.click(function (){
        hideMainPage();
        showElement($screensObj.aboutme);
    })

    //Clicking skills button
    $buttonsObj.skillsb.click(function (){
        hideMainPage();
        showElement($screensObj.skills);
    })
    //Clicking porfolio button
    $buttonsObj.portfoliob.click(function (){
        hideMainPage();
        showElement($screensObj.portfolio);
    })
    //Clicking previous experience button
    $buttonsObj.previousexpb.click(function (){
        hideMainPage();
        showElement($screensObj.previusexp);
    })
    //Clicking contact button
    $buttonsObj.contactb.click(function (){
        hideMainPage();
        showElement($screensObj.contact);
    })
    //Clicking any of the BACK Buttons;
    $allBackButtons.click(function () {
        $titles.removeClass('animated fadeInRight');
        $allMainButtons.removeClass('animated fadeInRight');
        goBack();
    });
})