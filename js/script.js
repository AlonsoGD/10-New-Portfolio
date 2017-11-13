$(document).ready(function () {
    var $buttons = $('button');

    //var $individualButtons = [$('#about'), $('#skills'), $('#portfolio'), $('#didbefore'), $('#contact')];
    var $about = $('#about');
    var $skills = $('#skills');
    var $portfolio = $('#portfolio');
    var $didBefore = $('#didbefore');
    var $contact = $('#contact');
    var $titles =  $('.titles');

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
    $titles.addClass('animated fadeInUp');
    setTimeout(function () {
        $about.css('opacity', '1');
        $about.addClass('animated fadeInRight');
    }, 500);

    setTimeout(function () {
        $skills.css('opacity', '1');
        $skills.addClass('animated fadeInRight');
    }, 600);

    setTimeout(function () {
        $portfolio.css('opacity', '1');
        $portfolio.addClass('animated fadeInRight');
    }, 700);

    setTimeout(function () {
        $didBefore.css('opacity', '1');
        $didBefore.addClass('animated fadeInRight');
    }, 800);

    setTimeout(function () {
        $contact.css('opacity', '1');
        $contact.addClass('animated fadeInRight');
    }, 900);

    //Click animations for the buttons;
    $buttons
        .mousedown(function() {
            $(this).addClass('clicked');})
        .mouseup(function() {
            $(this).removeClass('clicked');
    })


})