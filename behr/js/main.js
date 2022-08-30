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

    function headerFixed(){// 함수의 선언
        scrolling=$(window).scrollTop()
        if(scrolling>0){
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }
    }
})

