$(document).ready(function () {
    AdjustHeader();
    $('#content').load('content/home.html');
    $(window).resize(function () {
        AdjustHeader();
    });
});

function AdjustHeader() {
    if ($('#hamburger').css('display') == 'block') {
        $('nav').removeClass('navbar-fixed-top').addClass("navbar-static-top");
        $('body').css({ "padding-top": 0 });
    }
    else {
        $('nav').removeClass('navbar-static-top').addClass("navbar-fixed-top");
        $('body').css("padding-top", 50);
    }
}

// Home Nav Button
$(document).on("click", "#homeBtn", function () {
    ContentLoader(this, 'home');
});

// Specials Nav Button
$(document).on("click", "#specialsBtn", function () {
    ContentLoader(this, 'specials');
});

// History Nav Button
$(document).on("click", "#historyBtn", function () {
    ContentLoader(this, 'history');
});

// Fun Facts Nav Button
$(document).on("click", "#funFactsBtn", function () {
    ContentLoader(this, 'funfacts');
});

// Loads html content based on value given
function ContentLoader(obj, val) {
    $('#navbar li').each(function () {
        $(this).removeClass('active');
    });

    $(obj).parent().addClass('active');

    $('#content').empty();

    // Collapse nav menu when it is displayed
    if ($('#hamburger').css('display') == 'block') {
        $('#navbar').collapse('toggle');
    }

    if (val == 'home') {
        $('#content').load('content/home.html');
    }
    else if (val == 'specials') {
        $('#content').load('content/specials.html');
    }
    else if (val == 'history') {
        $('#content').load('content/history.html');
    }
    else if (val == 'funfacts') {
        $('#content').load('content/funfacts.html');
    }
};