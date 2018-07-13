// Home Nav Button
$(document).on("click", "#homeBtn", function () {
    $('#navbar li').each(function () {
        $(this).removeClass('active');
    });
    $(this).parent().addClass('active');

    ContentLoader('home');
});

// Specials Nav Button
$(document).on("click", "#specialsBTn", function () {
    $('#navbar li').each(function () {
        $(this).removeClass('active');
    });
    $(this).parent().addClass('active');

    ContentLoader('specials');
});

// History Nav Button
$(document).on("click", "#historyBtn", function () {
    $('#navbar li').each(function () {
        $(this).removeClass('active');
    });
    $(this).parent().addClass('active');

    ContentLoader('history');
});

// Fun Facts Nav Button
$(document).on("click", "#funFactsBtn", function () {
    $('#navbar li').each(function () {
        $(this).removeClass('active');
    });
    $(this).parent().addClass('active');

    ContentLoader('funfacts');
});

// Loads html content based on value given
function ContentLoader(val) {
    $('#content').empty();

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