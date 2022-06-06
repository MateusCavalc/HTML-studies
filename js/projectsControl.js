function onClickType() {
    var el = $(this);
    var type =  $(this).text();
    var cssSeletor;

    if(type == 'all') {
        cssSeletor = '.page-main .columns figure';
        if(!el.hasClass('toggle-type')) { $('.page-main .projects-div nav li:not(:first-child) em').addClass('toggle-type') }
        else { $('.page-main .projects-div nav li:not(:first-child) em').removeClass('toggle-type') }
    }
    else {
        cssSeletor = '.page-main .columns figure.' + type;
        var allType = $('.page-main .projects-div nav li:first-child em');
        if(allType.hasClass('toggle-type')) { allType.removeClass('toggle-type') }

    }

    $(this).toggleClass('toggle-type');

    $(cssSeletor).each(function() {
        $(this).toggleClass('toggle-figure');
    });

}

$(document).ready(() => {
    $('.page-main .projects-div nav em').toggleClass('toggle-type');
    $('.page-main .projects-div .columns figure').toggleClass('toggle-figure');
    $('.page-main .projects-div > nav em').click(onClickType);
});