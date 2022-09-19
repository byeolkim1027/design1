$(document).ready(function(){
    /*html 요소가 모두다 로딩된 이후에 jquery실행
      jqeury 에서 html 요소를 호출해서 이벤트를 주기 때문*/

    
    //맨처음 로딩 됬을때 한번만 실행
    let winW
    let pcMobile
    deviceChk()//deviceChk라는 이름을 가진 함수 호출 

    //브라우저가 리사이즈 될때마다 실행
    $(window).resize(function(){
        deviceChk()
    })

    function deviceChk(){
        winW=$(window).width()

        if(winW>640){//브라우저 넓이가 640px 보다 크면
            pcMobile='pc'
            console.log(pcMobile)
        }else{// 브라우저 넓이가 640px 이하면
            pcMobile='mobile'
            console.log(pcMobile)
        }
    }//function deviceChk end

    /*
        메뉴에 마우스를 오버하면 header에 menu_open 클래스 추가
        (단, pc에서만/ mobile 에서는 효과 없음
            pc = window.width 가 640px 초과)

        메뉴 : .header .gnb>ul>li
        -> 이벤트핸들러 는 pc와 모바일 상관없이 준다
           단 실행은 pc일때만 실행하게 한다.
        -> on 으로 주는 이벤트핸들러는 한번만 주면,
           mouseenter 이벤트가 발생할때마다 실행됨
        -> pc일때만 on 을 주는건 불가
    */
    /*== 이 사인 두개 필수(같다는 의미)*/

    $('.header .gnb>ul>li').on('mouseenter focusin', function(){
        if(pcMobile=='pc'){
            $('.header').addClass('menu_open')
        }//if문 종료
    })//mouseenter end

    
    $('.header').on('mouseleave',function(){
        $('.header').removeClass('menu_open')
    })
    /*tap 으로 메뉴 조작하는거 없애는 선언문*/
    $('.header .gnb>ul>li:last-child>ul>li:last-child>a').on('focusout',function(){
        $('.header').removeClass('menu_open')
    })

    /*
        .header .gnb .gnb_open 을 클릭하면 header에 menu_mobile 라는 클래스 추가(메뉴열기)
        .header .gnb .gnb_close 를 클릭하면 header에 menu_mobile 라는 클래스 삭제(메뉴닫기)
        --->단, 모바일에서만 작동(gnb_open이 pc에서 숨겨져 있는 버튼)
        --->header에 menu_mobile 이라는 스타일이 적용된 상태에서 pc로 전환됐을때도 고려해야함
    */

    $('.header .gnb .gnb_open').on('click', function(){
        $('.header').addClass('menu_mobile')
    })
    $('.header .gnb .gnb_close').on('click', function(){
        $('.header').removeClass('menu_mobile')
    })

    /*
        1차메뉴li를 클릭했을때(.header .gnb>ul>li)
        클릭한 li에만 sub_open 이라는 클래스 추가(메뉴열기)
        -->만약에 현재 열려있는 상태면 닫기(sub_open 삭제)
                  현재 닫혀있는 상태라면 열기(sub_open 추가)
        -->서브메뉴는 직접 닫기 전에는 모두 열린상태를 유지(여러메뉴가 동시에 열릴수 있음)
        -->pc에서는 1차 메뉴를 클릭하면 첫번째 하위메뉴로 이동(href값으로 이동)
           그러나 모바일에서는 하위메뉴 페이지로 이동 하면 안됨, 하위메뉴를 열어야함
    */
    $('.header .gnb>ul>li').on('click', function(e){
        if(pcMobile=='mobile'){ //모바일에서만 실행
            e.preventDefault() 
            /* 해당 요소를 클릭햇을때 기본적으로 발생하는 이벤트를 취소
                -> href로 페이지가 이동한느걸 취소 시킴*/
            $(this).toggleClass('sub_open')
            /*4개의 1차메뉴 li중에서 클릭한 li를 this라고 함*/
        }            
    })

   


})//document.ready end