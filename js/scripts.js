$( document ).ready(function() {
    var apprecode_cookies = localStorage.getItem('apprecode_cookies');
    if (apprecode_cookies != 'checked') {
      $(".cookies").removeClass('hidden');
    }

    $(".phone").mask("+38(099) 999 99 99");

    $('.drop_wrap .selected').click(function(){
        $(this).toggleClass('active');
        $(this).siblings('.drop').toggleClass('active');
    })

    $('.drop_wrap .drop .link').click(function(){
        $(this).closest('.drop').toggleClass('active');
        $(this).closest('.drop_wrap').find('.selected').toggleClass('active');
        $(this).closest('.drop_wrap').find('.selected').html($(this).html());
    })

    $('.drop_wrap .drop .clear').click(function(){
        $(this).closest('.drop').toggleClass('active');
        $(this).closest('.drop_wrap').find('.selected').toggleClass('active');
        $(this).closest('.drop_wrap').find('.selected').html('Оберіть послугу');
    })

    $(".input_wrap input, .input_wrap textarea").click(function(){
        $(this).removeClass('invalid');
    })

    $(".input_wrap input:required").blur(function(){
        $(this).removeClass('invalid');
        if( $(this).val() == '' || $(this).is(":invalid")) {
          $(this).addClass('invalid');
        } else if ( $(this).val() != '' ) {
            $(this).addClass('filled');
        }
    });

    $(".input_wrap textarea").blur(function(){
        $(this).removeClass('invalid');
        if ( $(this).val() != '' ) {
            $(this).addClass('filled');
        } else {
            $(this).removeClass('filled');
        }
      });
      
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

    $('.lang').click(function(){
        $(this).toggleClass('active');
    })

    if($('.counter-number').length){
        $('.counter-number').appear(function () {
            $('.counter-number').countTo();
        });
    }

    $('.modal_overlay .close, .modal_overlay .btn_color').click(function(){
        // $(this).closest('.modal_overlay').removeClass('active');
        $(this).closest('.modal').removeClass('active');
        $('body').removeClass('no_scroll');

        if ( $(this).hasClass('last') ) {
            $(this).closest('.modal_overlay').removeClass('active');
        }
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

    if ($('.services_swiper')) {
        const services_swiper = new Swiper('.services_swiper', {
            slidesPerView: 3,
            loop: true,
            spaceBetween: 20,
    
            navigation: {
              nextEl: '.clients_swiper_prev',
              prevEl: '.clients_swiper_next',
            },
        });
    }

    if ( $('.custom_scroll_bar') ) {
        new SimpleBar(document.getElementsByClassName('custom_scroll_bar'));
    }
});