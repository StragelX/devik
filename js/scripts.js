$( document ).ready(function() {
    $('.open_close_menu').click(function(){
        $('menu').toggleClass('active');
        $('body').toggleClass('no_scroll');
    });

    $('menu .line.with_group').click(function(){
        var id = $(this).attr('data-id');

        $('menu .links').each(function(){
            $(this).hide();
            if( $(this).attr("data-id") == id ) {
                $(this).show();
            }
        })
    });

    $('.cookies_wrap .btn_transparent').click(function(){
        $(this).closest('.cookies_wrap').removeClass('active');
    })

    $('.lang ').click(function(){
        $(this).toggleClass('active');
    })

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

    if ($('.suuces_story_swiper')) {
        const suuces_story_swiper = new Swiper('.suuces_story_swiper', {
            slidesPerView: 3,
            spaceBetween: 120,
            loop: true,
            autoplay: true
        });
    }
    
    if ($('.clients_logos_swiper')) {
        const clients_logos_swiper = new Swiper('.clients_logos_swiper', {
            slidesPerView: 6,
            loop: true,
            autoplay: true
        });
    }

    if ($('.sertificates_swiper')) {
        const sertificates_swiper = new Swiper('.sertificates_swiper', {
            slidesPerView: 4,
            loop: true,
            autoplay: true
        });
    }
});