$(document).ready(function(){
    const swiper = new Swiper('.visual1', {
        
        loop: true, //마지막 팝업에서 1번팝업으로 순차적으로 순환되게 하는값
        effect: "fade", //fade 효과로 팝업 넘김-> 값을빼면 좌우 슬라이드

        autoplay: { //자동실행
            delay: 3000, //하나의 팝업이 보여지는시간 3000=3초
            disableOnInteraction: false,
        },
      
        // 팝업의 숫자대로 동그라미를 그려주거나 2/5 팝업 수를 표시하는 요소
        pagination: {
            el: '.ctrl_paging',
            clickable: true, //동그라미일때 동그라미를 클릭하게 해주는것
            type: "fraction", // 숫자로 팝업수 표시
        },
      
        // Navigation arrows
        navigation: {
            nextEl: '.ctrl_next',
            prevEl: '.ctrl_prev', //기본스타일 안쓸거면 class이름을 바꿔주면됨
        },
      
    });

    $('.visual1 .ctrl_stop').on('click',function(){
        swiper.autoplay.stop();  /* 일시정지 기능 */
    })
    $('.visual1 .ctrl_play').on('click',function(){
        swiper.autoplay.start();  /* 재생 기능 */
    })
})