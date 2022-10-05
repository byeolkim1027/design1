$(document).ready(function(){
    /*
        lnb에 메뉴를 클립하면 하위메뉴가 나타났다가 사라짐
        .lnb .menu .depth .btn 를 클릭했을때
        .lnb .menu .depth .btn 에 open 클래스가 추가됨/뺌
        -- open 클래스가 들어가면 열린상태
        -- open 클래스가 없으면 담힘
        -> 하나의 버튼으로 열고 닫고를 동시에 실행
        -> .btn 테그의 title을 1차메뉴 열기/닫기 문구를 맞게 수정해줘야함
            $('.lnb .menu .depth .btn').attr('title','메뉴닫기') = 문구 바꾸기
        
        btn 을 클릭했을때 현재 열려있는 상태인지, 닫혀있는 상태인지 파악
        .lnb .menu .depth .btn에 open 클래스가 있으면 열린상태, 없으면 닫힌상태
        $('.lnb .menu .depth').hasClass('open')
    */
    let lnbStatus
    $('.lnb .menu .depth .btn').on('click',function(){
        lnbStatus=$(this).parents('.depth').hasClass('open')
        if(lnbStatus==true){//열린상태 - 닫는기능
            $(this).parents('.depth').removeClass('open')
            $(this).attr('title','메뉴열기')
            $(this).next().slideUp(200)
        }else{//닫힌상태 - 여는기능
            $(this).parents('.depth').addClass('open')
            $(this).attr('title','메뉴닫기')
            $(this).next().slideDown(200)/*자연스레 아래로 슬라이딩으로 열고닫히는값*/
        }
    })//lnb click event end

})