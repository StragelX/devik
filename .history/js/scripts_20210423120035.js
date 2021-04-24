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

    $('.modal_overlay .close, .modal_overlay .btn_color').click(function(){
        $(this).closest('.modal_overlay').removeClass('active');
        $(this).closest('.modal').removeClass('active');
        $('body').removeClass('no_scroll');
    })

    $('#blog .btn_transparent.tag').click(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    })
});