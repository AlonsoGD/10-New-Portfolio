$(document).ready(function () {
    var $buttons = $('button');

    var $individualButtons = [$('#about'), $('#skills'), $('#portfolio'), $('#didbefore'), $('#contact')];
    var $about = $('#about');
    var $skills = $('#skills');
    var $portfolio = $('#portfolio');
    var $didBefore = $('#didbefore');
    var $contact = $('#contact');

    // function introAnimation () {
    //     var sleep = 400;
    //     for (var i = 0; i < $individualButtons; i++) {
    //         setTimeout(function () {
    //             $individualButtons[i].addClass('animated fadeInRight');
    //             $individualButtons[i].css('opacity', 1);
    //             sleep += 100;
    //             console.log(sleep);
    //         }, sleep);
    //     }
    // }

    // introAnimation();

    setTimeout(function () {
        $about.addClass('animated fadeInRight');
        $about.css('opacity', 1);
    }, 500);

    setTimeout(function () {
        $skills.addClass('animated fadeInRight');
        $skills.css('opacity', 1);
    }, 600);

    setTimeout(function () {
        $portfolio.addClass('animated fadeInRight');
        $portfolio.css('opacity', 1);
    }, 700);

    setTimeout(function () {
        $didBefore.addClass('animated fadeInRight');
        $didBefore.css('opacity', 1);
    }, 800);

    setTimeout(function () {
        $contact.addClass('animated fadeInRight');
        $contact.css('opacity', 1);
    }, 900);

    //Click animations for the buttons;
    $buttons
        .mousedown(function() {
            $(this).addClass('clicked');})
        .mouseup(function() {
            $(this).removeClass('clicked');
    })


})