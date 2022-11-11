$(document).ready(function(){
    const swiper = new Swiper('.visual .popup', {

    effect: "fade",

    autoplay: {  /* 팝업 자동 실행 */
        delay: 3000,
        disableOnInteraction: true,
    },

    loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */


    navigation: {  /* 이전, 다음 버튼 */
        nextEl: '.btn_next',  /* 다음 버튼의 클래스명 */
        prevEl: '.btn_prev',  
    },
})
})