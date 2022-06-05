function onClickType() {
    var type =  $(this).text();
    var cssSeletor;

    if(type == 'all') { cssSeletor = '.page-main .columns figure' }
    else { cssSeletor = '.page-main .columns figure.' + type }

    $(cssSeletor).each(function() {
        if($(this).css('display') === 'none') {
            $(this).css('display', 'block');
        }
        else {
            $(this).css('display', 'none');
        }
    }); 

    if($(this).css('color') == 'rgb(165, 165, 165)') { $(this).css('color', '#262626') }
    else { $(this).css('color', '#a5a5a5') }
}

$(document).ready(() => {
    $('.page-main .projects-div > nav em').click(onClickType);
});