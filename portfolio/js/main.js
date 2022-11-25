$(document).ready(function(){
    const content = "안녕하세요, 웹퍼블리셔 김별입니다.";
    const text = document.querySelector(".txt");
    let i = 0;

    function typing(){
        let txt = content[i++];
        text.innerHTML += txt;
        if (i > content.length) {
            text.textContent = "";
            i = 0;
        }
    }
    setInterval(typing, 200)

    $(document).ready(function($){
        $(".scroll_move").click(function(event){         
                event.preventDefault();
                $('html,body').animate({scrollTop:$(this.hash).offset().top}, 200);
        })
    })
})