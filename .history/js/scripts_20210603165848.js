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

    $('.modile_menu_bar button.burger').click(function(){
        $(this).toggleClass('active');
        $('menu').toggleClass('active');
        $('body').toggleClass('no_scroll');
    });

    $('.call_modal').click(function(){
        var id = $(this).attr('data-id');
        $('.modal_overlay').addClass('active');
        $('.modal').each(function(){
            if ( $(this).attr('id') == id ) {
                $(this).addClass('active');
            }
        })
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
            loop: true,

            breakpoints: {
                0: {
                    slidesPerView: 1.1, 
                    spaceBetween: 0
                },

                750: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
    
                1000: {
                    slidesPerView: 2.5,
                    spaceBetween: 30
                },
    
                1400: {
                    slidesPerView: 3,
                    spaceBetween: 30
                }
            },
    
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
            loop: true,
            autoplay: true,

            breakpoints: {
                70: {
                    slidesPerView: 2
                },

                750: {
                    slidesPerView: 3
                },
    
                900: {
                    slidesPerView: 4
                },
    
                1025: {
                    slidesPerView: 6
                }
            }
        });
    }

    if ($('.sertificates_swiper')) {
        const sertificates_swiper = new Swiper('.sertificates_swiper', {
            loop: true,
            autoplay: true,

            breakpoints: {
                0: {
                    slidesPerView: 4
                },

                750: {
                    slidesPerView: 4.8
                },
    
                900: {
                    slidesPerView: 5.9
                },
    
                1025: {
                    slidesPerView: 4
                }
            }
        });
    }

    if ($('.services_swiper')) {
        const services_swiper = new Swiper('.services_swiper', {
            loop: true,
            spaceBetween: 20,

            breakpoints: {
                0: {
                    slidesPerView: 1, 
                    spaceBetween: 0
                },
    
                750: {
                    slidesPerView: 2
                },
    
                1025: {
                    slidesPerView: 3
                }
            },
    
            navigation: {
              nextEl: '.clients_swiper_prev',
              prevEl: '.clients_swiper_next',
            },
        });
    }

    if ($('.main_buttons_swiper') && $( document ).width() < 770) {
        const main_buttons_swiper = new Swiper('.main_buttons_swiper', {
            slidesPerView: 2,
            spaceBetween: 20
        });
    }

    if ($('.workers_swiper') && $( document ).width() < 770) {
        const workers_swiper = new Swiper('.workers_swiper', {
            spaceBetween: 20,
            slidesPerView: 1.5,
            loop: true,

            navigation: {
                nextEl: '.clients_swiper_prev',
                prevEl: '.clients_swiper_next',
            },
        });
    }

    



    // new
    $('.switch_locations').click(function(){
        var val1 = $(this).siblings('.input_wrap').first().find('input').val();
        $(this).siblings('.input_wrap').first().find('input').val($(this).siblings('.input_wrap').last().find('input').val())
        $(this).siblings('.input_wrap').last().find('input').val(val1);
    })

    $('.add_loc_group').click(function(){
        $(this).siblings('#locations_group_0').clone(true).insertAfter('.locations_group');
    })

    if ( $('.custom_scroll_bar') ) {
        new SimpleBar(document.getElementsByClassName('custom_scroll_bar'));
    }
});