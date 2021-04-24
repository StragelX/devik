$( document ).ready(function() {
    $('menu:not(.active)').click(function(event){
        $(this).addClass('active');
        event.stopPropagation();
    });

    $('.menu_close_bar').click(function(event){
        $('menu').removeClass('active');
        event.stopPropagation();
    });

    if($('.counter-number').length){
        $('.counter-number').appear(function () {
            $('.counter-number').countTo();
        });
    }
});