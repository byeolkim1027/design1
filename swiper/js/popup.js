$(document).ready(function(){
    const swiper = new Swiper('.visual1', {
        
        loop: true, //마지막 li에서 끝나지 않고 계속 돌게 해주는 값
      
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
})