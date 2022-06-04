
function onClick() {

        var index = $('.main-figure-navigator ul button').index($(this));

        var img = $('#main-img' + (index+1));
        if(img.css('display') === 'none') {
                img.css("display", "block");
                $(this).css('background-color', '#333333');

                $('.img-container img').each(function() {
                        if(!$(this).attr('id').includes(index+1)) {
                                $(this).css('display', 'none');
                        }
                });
                $('.main-figure-navigator ul button').each(function() {
                        if(!$(this).attr('id').includes(index+1)) {
                                $(this).css('background-color', '#d1d1d1');
                        }
                });

        }
}

$(document).ready(() => {
        $('.main-figure-navigator ul button').click(onClick);
});