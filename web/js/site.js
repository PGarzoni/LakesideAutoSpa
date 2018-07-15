$(window).resize(function () {
    if ($(window).width() >= 768) {
        $('nav').removeClass('navbar-static-top').addClass("navbar-fixed-top");
        $('body').css("padding-top", 50);
    } else {
        $('nav').removeClass('navbar-fixed-top').addClass("navbar-static-top");
        $('body').css({ "padding-top": 0 });
    }
});


// Home Nav Button
$(document).on("click", "#homeBtn", function () {
    ContentLoader('home');
    $(this).parent().addClass('active');
});

// Specials Nav Button
$(document).on("click", "#specialsBTn", function () {
    ContentLoader('specials');
    $(this).parent().addClass('active');
});

// History Nav Button
$(document).on("click", "#historyBtn", function () {
    ContentLoader('history');
    $(this).parent().addClass('active');
});

// Fun Facts Nav Button
$(document).on("click", "#funFactsBtn", function () {
    ContentLoader('funfacts');
    $(this).parent().addClass('active');
});

// Loads html content based on value given
function ContentLoader(val) {
    $('#navbar li').each(function () {
        $(this).removeClass('active');
    });

    $('#content').empty();

    // Collapse nav menu when it is displayed
    if ($('#hamburger').css('display') == 'block') {
        $('#navbar').collapse('toggle');
    }

    if (val == 'home') {
        $('#content').load('content/home.html');
    }

    if (val == 'specials') {
        $('#content').load('content/specials.html');
    }

    if (val == 'history') {
        $('#content').load('content/history.html');
    }

    if (val == 'funfacts') {
        $('#content').load('content/funfacts.html');
    }
};