$(document).ready(function(){

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
    
    /*
        .header .lang .open 클릭했을때 보이는 효과
        1. ul이 나타나야함
        2. open 숨김, close 나타남
        --> css에서 처리
        
        .header .lang에 lang_open 클래스를 추가(jquery에서 효과줌)

        .header .lang .close 클릭하면 
        --> .header .lang 에 lang_open 클래스 삭제
    */

        $('.header .lang .open').on('click',function(){
            $('.header .lang').addClass('lang_open')
        })
        $('.header .lang .close').on('click',function(){
            $('.header .lang').removeClass('lang_open')
        })
    
        /*
            메뉴에 (.header .gnb>ul>li>a)마우스를 오버했을때 
            header에 menu_open 클래스 추가
    
            메뉴에 (.header)마우스 아웃했을때(벗어났을때)
            / 왜냐면 메뉴 백그라운드(흰색배경)를 헤더에 줬기때문에
            header에 menu_open 클래스 삭제
        */
        $('.header .gnb>ul>li>a').on('mouseenter focusin',function(){
            if(pcMobile=='pc'){
                $('.header').addClass('menu_open')
            }    
        })
        /*focusin 이 웹접근성때문에 tap 으로 메뉴를 고를수있어야하기때문에*/
        $('.header').on('mouseleave',function(){
            $('.header').removeClass('menu_open')
        })
        $('.header .gnb>ul>li:last-child>ul>li:last-child>a').on('focusout',function(){
            $('.header').removeClass('menu_open')
        })
        /*웹접근성때문에 tap으로 메뉴를 고를때 마지막 메뉴에서 포커스 아웃되는작업*/
    
    
        /*
            .header .gnb .open 을 클릭하면 
            header에 menu_mobile 클래스 추가 
    
            .header .gnb .close를 클릭하면
            header menu_mobile 클래스 삭제
        */
        $('.header .gnb .open').on('click',function(){
            if(pcMobile=='mobile'){
                $('.header').addClass('menu_mobile')
            }
        })
        $('.header .gnb .close').on('click',function(){
            $('.header').removeClass('menu_mobile')
        })

        /*
            1차 메뉴를 클릭해서  
                - 닫혀있으면 li에 sub_open 클래스 추가
                - 열려있으면 li에 sub_open 클래스 삭제
            ---> toggle
            ---> this(클릭된 자기자신) 
        */
        $('.header .gnb>ul>li').on('click', function(e){
            if(pcMobile=='mobile'){
                e.preventDefault()
                /* 1차 메뉴를 클릭했을때 a href 로 페이지가 자동으로 이동하는 현상 막기*/
                $(this).toggleClass('sub_open')
            }
            
        })
})