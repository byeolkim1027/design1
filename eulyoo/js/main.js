/*
    언제 : 스크롤을 내렸을때
    누구를 : header $('')  --> 이게 제이쿼리에서 선택자를 부르는 방법
    어떻게 : fixed class를 추가  : addClass() - 클래스를 추가하는 명령 

    -->
    다시 위로 올라갔을때 fixed 클래스를 다시 삭제해야함 

    $(window).scrollTop() - 얼만큼 스크롤 되었는지 계산해주는 값

    스크롤값을 계산해서 
    스크롤을 300보다 많이하면 fixed를 추가하고
    300 이하면 fixed 삭제 
*/

let scrolling=$(window).scrollTop()

$(window).scroll(function(){
    scrolling=$(window).scrollTop()
    $('header').addClass('fixed')
    console.log(scrolling)

    if(scrolling > 200){
        $('header').addClass('fixed')
    }else{
        $('header').removeClass('fixed')
    }
});
