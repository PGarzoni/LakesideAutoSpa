$(document).on("click", "#homeBtn", NavHome);
$(document).on("click", "#specialsBTn", NavSpecials);
$(document).on("click", "#historyBtn", NavHistory);
$(document).on("click", "#funFactsBtn", NavFunFacts);

function ClearContent() {
    $('#content').empty();
};

function NavHome() {
    ClearContent();
    $('#content').load('resources/content.html #Home');
};

function NavSpecials() {
    ClearContent();
    $('#content').load('resources/content.html #Specials');
};

function NavHistory() {
    ClearContent();
    $('#content').load('resources/content.html #History');
};

function NavFunFacts() {
    ClearContent();
    $('#content').load('resources/content.html #FunFacts');
};