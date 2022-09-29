/* header, footer에 포함되는 jquery - 모든 페이지에 공통으로 적용되는 기능*/

$(document).ready(function(){
    //로딩돘을때 단한번 실행
    let pcMo //pc일때 pc, 모바일때는 mobile
    let winW
    pcChk() //함수실행

    $(window).resize(function(){
        pcChk() //함수실행
    })
    function pcChk(){//함수 선언
        winW=$(window).width()
        if(winW>640){
            pcMo='pc'
        }else{
            pcMo='mobile'
        }
        // console.log(pcMo)
    }

    $('.header .gnb>ul>li').on('mouseenter focusin',function(){
        if(pcMo=='pc'){
            $('.header').addClass('menu_open')
        }
    })
    $('.header').on('mouseleave',function(){
        $('.header').removeClass('menu_open')
    })
    $('.header .gnb>ul>li:last-child>ul>li:last-child>a').on('focusout',function(){
        $('.header').removeClass('menu_open')
    })
    
    let scrolling //변수선언
    scrollChk()

    $(window).scroll(function(){
        scrollChk() //함수실행
    })

    function scrollChk(){//함수선언
        scrolling=$(window).scrollTop()
        console.log(scrolling)
        if(scrolling>0){
            $('.header').addClass('fixed')
        }else{
            $('.header').removeClass('fixed')
        }
    }

    /*모바일버전 메뉴 열엇다닫기 하는거*/
    $('.header .gnb .gnb_open').on('click',function(){
        $('.header').addClass('menu_mobile')
    })
    $('.header .gnb .gnb_close').on('click',function(){
        $('.header').removeClass('menu_mobile')
    })

    $('.header .gnb>ul>li>a').on('click',function(e){
        if(pcMo=='mobile'){
            e.preventDefault()/* 모바일에서 1차메뉴 클릭했을때 그 눌린 페이지로 안가게 하는값*/
            $(this).parents('li').toggleClass('sub_open') /*this=클릭된본인, toggleclass=클릭되면 넣고 아님 다시누름 빼고*/
        }
    })

})// document.ready  종료