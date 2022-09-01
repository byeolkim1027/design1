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
    console.log(winH)
    /*css 선택자 .까지 다 가져와서 불러야함*/
    $('.visual').height(winH)


    $(window).resize(function(){
        winH=$(window).height()
        console.log(winH)
        $('.visual').height(winH)
    })
})