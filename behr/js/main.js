$(document).ready(function(){
    let winW=$(window).width()
    let docW=$(document).width()

    console.log(winW)
    console.log(docW)
    //TOP 버튼을 클릭했을때 상단으로 스크롤
    // $('header').addClass('fixed')
    // $('header').removeClass('fixed')

    $('aside button').on('click',function(){
        console.log('누름')
        // $(window).scrollTop(100)
        $('html,body').animate({
            scrollTop:0
        },500)
    })

    /*
        header에 
        조건1 - 스크롤 값이 0보다 크면 header에 fixed 클래스 추가
        조건2 - 스크롤 값이 0이면 header에 fixed 클래스를 삭제
    */
    //로딩했을때 맨처음에만 실행을 단한번 
    let scrolling
    headerFixed()//함수의 실행
    
    
    /*스크롤 할때마다 실행 - 스크롤 안하면 실행X*/    
    $(window).scroll(function(){    
        console.log(scrolling)
        headerFixed()//함수의 실행
    })

    /*함수를 쓰는 이유는 똑같은 실행을 조건만 다르게 해서 쓰기위해서*/
    function headerFixed(){// 함수의 선언
        scrolling=$(window).scrollTop()
        if(scrolling>0){
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }
    }

    /*
        header nav에 마우스를 올리면 
        header에 open 클래스를 추가함
    */
    $('header nav>ul').on('mouseenter focusin',function(){ 
        /*모바일에 작동되면 안되기때문에 header nav대신에 nav>ul 을 선언한다
          "focusin" 모든 a테그를 브라우저에서 tap을 키보드로 조작했을때 하위메뉴까지 tap으로 
          셀렉트 되게 해주는것*/
        $('header').addClass('open')
    })
    /*2차 메뉴 뒤에 준 배경까지 영역을 다 잡아서 그 안에는 마우스로 영역을
      다 잡을수 있게 헤더를 불러서 영역을 크게 잡는다*/
    $('header').on('mouseleave',function(){
        $('header').removeClass('open')
    })
    $('header nav>ul>li:last-child>ul>li:last-child').on('focusout',function(){
        $('header').removeClass('open')
    })
})

