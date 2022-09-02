$(document).ready(function(){
    /*
        visual의 높이를 브라우저 높이와 동일하게
        $(window).height() = 브라우저 창의 크기
        $(document).height() = 스크롤바 포함 전체 문서의 높이

        $(window).height() 의 높이를 visual의 높이로 설정
            1. 처음에 로딩했을때
            2. 브라우저가 리사이즈 될때마다
    */
   
    let winH=$(window).height()
    // console.log(winH)
    /*css 선택자 .까지 다 가져와서 불러야함*/
    $('.visual').height(winH)


    $(window).resize(function(){
        winH=$(window).height()
        // console.log(winH)
        $('.visual').height(winH)
    })

    /*
        동물보호절차 "step" 모바일에서 어떻게 보여지는지
        1. 모바일에서 한화면에 무조건 2개씩 나타나게 할 예정
            브라우저의 넓이를 알아내서 각 li의 넓이를 계산
            (컨텐츠 넓이 - 중간여백)/2 = li 의 넓이
        2. 모든 li는 좌우로 배치
            ol의 넓이가 모든li를 좌우로 배치할수 잇는 넓이를 가져야함
            li의 사이즈가 가변 --- ol의 넓이도 가변(jquery가 계산)
    */

    //처음에 로딩 되었을때
    /*여기선 선언만 하면 됨*/
    let areaW //list의 넓이값
    let liW //하나의 li의 넓이값
    let olW //li 전체를 감싸는 ol의 넓이값
    let winW //위도우의 넓이
    let idx=1 //현재보이는 번호
    let olLeft //ol의 left값

    console.log(idx)
    stepResize()

    //로딩 후 리사이즈 되었을때 총 2번씩 선언해줘야함
    $(window).resize(function(){  
        stepResize()
    })

    function stepResize(){
        winW=$(window).width()
        if(winW <= 640){ //모바일일때만 들어가는 효과
            areaW=$('.step .list').width()
            console.log(areaW)
            liW=(areaW - 16)/2
            $('.step .list ol li').outerWidth(liW)
            /*padding이 포함된 요소의 넓이를 줄때는 outerWidth로 넓이를 줘야한다*/
            olW=(liW * 6) +(16*5)
            $('.step .list ol').width(olW)
        }else{ /*
                pc버전일때 원래 li와 ol이 가져야 하는 넓이를 줘야함
                모바일 -> pc로 전환될때 모바일에서 준 넓이를 다시 pc의 넓이로 초기화 해야함
                */    
            $('.step .list ol li').outerWidth(200)
            $('.step .list ol').width('auto')
        }       
    }

    $('.step .ctrl button.prev').on('click',function(){
        /*이전
            5->4->3->2->1->0이하면 안함
            1번이 보일때 ol의 left는 0
            2번이 보일때 ol의 left 는 (li넓이+li여백)값을 음수값을줌
            3번이 보일때 oldml left는 (li넓이+li여백)*2 값을 음수값을줌
            4번이 보일때 oldml left는 (li넓이+li여백)*3 값을 음수값을줌

            -(li넓이 +li여백) *(idx-1)
        */
        if(idx>1){
            idx--
            olLeft=-(liW+16)*(idx-1)
            $('.step .list ol').animate({
                left:olLeft
            },500)
        }
        console.log(idx)        
    })
    $('.step .ctrl button.next').on('click',function(){
        /*다음
            1->2->3->4->5->6이상이면 안함       
        */
        if(idx<5){
            idx++
            olLeft=-(liW+16)*(idx-1)
            $('.step .list ol').animate({
                left:olLeft
            },500)
        }
        console.log(idx)      
    })

    /*
        family site
        .footer .family를 클릭하면 fa_open 클래스 추가/삭제
    */
   $('.footer .family button').on('click',function(){
        $('.footer .family').toggleClass('fa_open')
   })

   /*
        브라우저가 스크롤을 할때 스크롤값이 0보다 크면 
        header에 fixed라는 클래스를 줄 예정
        스크롤값이 0이 되면 header에 fixed 클래스를 삭제
   */
    let scrolling //스크롤된값
    scrollChk() //함수의 호출

    $(window).scroll(function(){//스크롤될때마다 위치 알려줌
        scrollChk()
    })

    function scrollChk(){ //함수의 선언
        scrolling=$(window).scrollTop()
        console.log(scrolling)
        if(scrolling>0){
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }
    }

})