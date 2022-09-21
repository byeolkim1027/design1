$(document).ready(function(){

    /*
        .lnb .menu .depth .btn_open 을 클릭하면
        .lnb .menu .depth에 open 클래스 추가
        .lnb .menu .depth .btn_close 를 클릭하면
        .lnb .menu .depth에 open 클래스 삭제
    
        <div class="depth">                     ------>$(this).parents('.depth') 
            <button class="btn_open"></button>  ------>클릭한요소$(this)
        </div>
        <div class="depth">
            <button class="btn_close"></button>
        </div>

        ---> depth가 두개
        .inb .menu .depth 라고 선택자를 주면 두개 모두에 적용이됨
        그래서 클릭한 요소를 선택하는 $(this)를 활용해서 depth를 선택
        --->this 라는 선택자는 그 클릭한 그자체를 지칭함
    */
  
    $('.lnb .menu .depth .btn_open').on('click',function(){
        $(this).parents('.depth').addClass('open')
    })
    $('.lnb .menu .depth .btn_close').on('click',function(){
        $(this).parents('.depth').removeClass('open')
    })
    

})//document ready 종료