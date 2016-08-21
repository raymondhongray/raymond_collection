var polling_id = 1;
var polling_total = $('.grid-hover').length;
var stop_polling = 0;

$(document).ready(function() {

    $('.grid-hover[data-id="0"]').find('.cover-opacity').css('display', 'block');

    $('.content-wrapper .grid-hover').hover(
        function() {
            $(this).find('.cover-opacity').css('display', 'block');
            stop_polling = 1;
        },
        function() {
            $(this).find('.cover-opacity').css('display', 'none');
            stop_polling = 0;
        }
    );

    $('.content-wrapper .grid-hover').click(function() {

        window.open($(this).attr('data-url'));
    });

    setInterval(function() {

        if (stop_polling == 0) {

            polling_id = polling_id % polling_total;
            $('.grid-hover').find('.cover-opacity').css('display', 'none');
            $('.grid-hover[data-id="' + polling_id + '"]').find('.cover-opacity').css('display', 'block');
            polling_id++;
        }

    }, 3000);
});
