$(function(){
    var win_w = $(window).width();
    var pos = [];
    var base = -300;

    function save_section_offset(){
        pos = []; 
        $('section').each(function(){
            pos.push( parseInt($(this).offset().top ));
            pos[0] = 0;
        });
    }
    save_section_offset();


    $('.menu>li').on('click', function(){
        var i = $(this).index();
        $(this).addClass('on').siblings().removeClass('on'); 
        $('html, body').stop().animate({scrollTop : pos[i] -80}, 1000);
        console.log(pos)
    });

    $(window).on('scroll', function(){
        var scroll = $(this).scrollTop();
        $('section').each(function(n){ 
            if(scroll >= pos[n] + base) {
                $(this).addClass('on').siblings().removeClass('on');
            }
        });
        console.log(scroll);
    });



    $(window).on('resize', function(){
        win_w = $(this).width();
        save_section_offset();
        if(win_w > 980){
            $('.menu_wrap').removeAttr('style');
        }
    });

    
    $('.menu_icon').on('click', function(){
        $('.menu_wrap').slideToggle();
    })
    





    var swiper = new Swiper('.swiper-container', {
              
        loop:true,
        pagination: {
          el: '.swiper-pagination',
        },
      
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
    });

});