$(document).ready(function(){
    // let typingBool = false; 
    // let typingIdx=0; 

    // // 타이핑될 텍스트를 가져온다 
    // let typingTxt = $(".typing_txt").text(); 

    // typingTxt=typingTxt.split(""); // 한글자씩 자른다. 

    // if(typingBool==false){ 
    //     // 타이핑이 진행되지 않았다면 
    //     typingBool=true;     
    //     var tyInt = setInterval(typing,200); // 반복동작 
    //     } 
            
    //     function typing(){ 
    //     if(typingIdx<typingTxt.length){ 
    //         // 타이핑될 텍스트 길이만큼 반복 
    //         $(".typing").append(typingTxt[typingIdx]);
    //         // 한글자씩 이어준다. 
    //         typingIdx++; 
    //     } else{ 
    //         //끝나면 반복종료 
    //         clearInterval(tyInt); 
    //     } 
    // }  
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
})