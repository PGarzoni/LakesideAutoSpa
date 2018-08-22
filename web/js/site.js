var cm = ContentManager();
if (sessionStorage.getItem('tab') === null) {
    sessionStorage.setItem('tab', 'Home');
}

$(window).on('load', function () {
    cm.contentLoader(sessionStorage.getItem('tab'));
});

$(window).on('beforeunload', function () {
    sessionStorage.setItem('tab', cm.getActiveTab());
    $(window).scrollTop(0);
});

// Home Nav Button
$(document).on("click", "#homeBtn", function () {
    cm.contentLoader($(this).text());
});

// Specials Nav Button
$(document).on("click", "#specialsBtn", function () {
    cm.contentLoader($(this).text());
});

// History Nav Button
$(document).on("click", "#historyBtn", function () {
    cm.contentLoader($(this).text());
});

// Fun Facts Nav Button
$(document).on("click", "#funFactsBtn", function () {
    cm.contentLoader($(this).text());
});

function ContentManager() {
    return {
        loadContent: function (destination) {
            $('#content').empty().load('content/' + this.pageCheck(destination) + '.html'); // Clear content and load in desired content
        },
        setActiveTab: function (target) {
            $('#navbar li.active').removeClass(); // Clear active tab

            // Set new tab to active
            var d = this.pageCheck(target);
            $('#navbar li a').each(function () {
                if ($(this).text().toLowerCase().replace(/\s/g, '') === d) {
                    $(this).parent().addClass('active');
                }
            });
        },

        contentLoader: function (destination) {
            if ($('#navbar[aria-expanded]').attr('aria-expanded') && $('#hamburger').css('display') === 'block') {
                $('#navbar').collapse('toggle');
            }
            this.loadContent(destination);
            this.setActiveTab(destination);
        },

        getActiveTab: function () {
            return $('#navbar li.active a').text();
        },
        pageCheck: function (page) {
            var p = page.toLowerCase().replace(/\s/g, ''); // Lowercase and remove spaces
            switch (p) {
                case 'home':
                case 'specials':
                case 'history':
                case 'funfacts':
                    return p;
                default:
                    return 'home';
            }
        }
    };
}