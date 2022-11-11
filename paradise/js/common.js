$(document).ready(function(){
    $('.header .tnb .lang .open').on('click',function(){
        $('.header .lang').addClass('lang_open')
    })
    $('.header .tnb .lang .close').on('click',function(){
        $('.header .lang').removeClass('lang_open')
    })

    let winW=$(window).width()
    let pcMobile //현재 pc 모드 인지 mobile 모드인지 알려주는 변수

    if(winW>640){
        pcMobile='pc'
        console.log(pcMobile)
    }else{
        pcMobile='mobile'
        console.log(pcMobile)
    }
    /*윈도우 사이즈가 리사이즈 될때마다 pc모드인지 mobile 모드인지 알려주는 선언*/
    $(window).resize(function(){
        winW=$(window).width()
        if(winW>640){
            pcMobile='pc'
            console.log(pcMobile)
        }else{
            pcMobile='mobile'
            console.log(pcMobile)
        }
    })

    $('.header .gnb>ul>li>a').on('mouseenter focusin',function(){
        if(pcMobile=='pc'){
            $('.header').addClass('menu_open')
        }    
    })
    $('.header').on('mouseleave',function(){
        $('.header').removeClass('menu_open')
    })
    $('.header .gnb>ul>li:last-child>ul>li:last-child>a').on('focusout',function(){
        $('.header').removeClass('menu_open')
    })
})