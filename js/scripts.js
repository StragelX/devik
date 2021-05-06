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

    if ($('.clients_swiper')) {
        const clients_swiper = new Swiper('.clients_swiper', {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: true,
    
            navigation: {
              nextEl: '.clients_swiper_prev',
              prevEl: '.clients_swiper_next',
            },
        });
    }
    
    if ($('.clients_logos_swiper')) {
        const clients_logos_swiper = new Swiper('.clients_logos_swiper', {
            slidesPerView: 6,
            loop: true,
            autoplay: {
              delay: 500,
              disableOnInteraction: false,
            },
        });
    }
});