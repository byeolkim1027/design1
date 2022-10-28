$(document).ready(function(){
		const swiper = new Swiper('.visual .popup', { /* 팝업을 감싼는 요소의 class명 */

		effect: "fade", /* fade 효과 */

		autoplay: {  /* 팝업 자동 실행 */
			delay: 3000,
			disableOnInteraction: true,
		},

		loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

		pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
			el: '.btn_paging', /* 해당 요소의 class명 */
			clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
		},

		navigation: {  /* 이전, 다음 버튼 */
			nextEl: '.swiper-button-next',  /* 다음 버튼의 클래스명 */
			prevEl: '.swiper-button-prev',  
		},
	});//visual swiper

	/* visual popup 의 정지버튼 / 재생버튼 
		하나의 버튼이 두가지 기능
		정지와 재생 기능을 구분하는 값.....
		btn_stop 버튼에 play 클래스가 없으면 일시정지
		play 클래스가 있으면 재생
	*/
	$('.visual .popup .btn_stop').on('click',function(){
		let popStatus=$(this).hasClass('play') //true면 play가 있다는 이야기 - 재생기능실행
		if(popStatus==true){ //버튼의 상태가 play모양 - 현재 정지상태 - 재생기능을 실행
			swiper.autoplay.start();
			$(this).removeClass('play')
			$(this).text('일시정지')
		}else{ // 버튼의 상태가 일시정지 모양 - 현재 재생상태 - 일시정지 기능을 실행
			swiper.autoplay.stop(); // -> 실행하는값
			$(this).addClass('play') // -> 아이콘 모양을 바꿔주는값
			$(this).text('재생')// ->.text 라는값을 추가하면 그전에 있던 모든값을 지우고 여기서 입력한 값만 들어간다
		}
	})//visual stop button

	
	/*
		이미지가 스크롤 될때 object가 움직이는 효과
		움직이는 시작을 object가 화면에 나타나기 시작했을때 부터 스크롤된 값을 계산해서 
		움직일 값으로 변환해줘야함
			1. 브라우저가 스크롤 되는값 - $(window).scrollTop()
			2. object가 화면 하단에 나타나기 시작하는 값
				-- offset().top - 상단 맨 위에서부터 object까지의 거리값
				offset().top 과 $(window).scrollTop값이 같아지는 시기는 object가 화면
				산단에 딱 붙었을때
				--> 필요한건 object가 화면 하단에서 보이기 시작할때...
				두 값의 차이가 브라우저의 높이값....
				
				object가 화면 하단에서 나타나기 시작하는 값은 
				object의 offset().top - 윈도우의 높이값 만큼 스크롤 됬을때

			3. object를 어떻게 움직일 방법
				animate - transform X
				CSS로 transform: translate() 로 움직일 예정
				
	*/

	let winH
	let moveval //오브젝트가 움직일값(연산값)
	let offTop
	let scrolling
	
	/*
		objMove : 실제움직일 오브젝트
		objParent : 움직일 오브젝트의 기준이 되는 요소(offset.top()을 계산할 오브젝트)
		moveDir : 스크롤 방향(left-좌우, top-위아래)
		moveRate : 움직일 속도/비율(숫자에는 '' 표시 없음)
	*/
	objParallax($('.fabric .bg img'),$('.fabric .bg'),'top',0.1) //윈도우가 처음 실행됬을때
	// objParallax($('.sns p'),$('.sns p'),'left',0.3) ->스크롤 될때마다 .sns p 글자가 좌우로 움직이는거
	
	function objParallax(objMove,objParent,moveDir,moveRate){//오브젝트를 움직이는 애니메이션(한번세팅)
		objMove.css('transition','0.5s')
		moveAni(objMove,objParent,moveDir,moveRate)
		$(window).scroll(function(){
			moveAni(objMove,objParent,moveDir,moveRate) //윈도우가 스크롤링 됬을때
		})
		$(window).resize(function(){
			moveAni(objMove,objParent,moveDir,moveRate) //윈도우가 리사이즈 됬을때
		})
	}
	function moveAni(objMove,objParent,moveDir,moveRate){//오브젝트를 실제 움직이는 함수(반복실행)
		winH=$(window).height()
		offTop=objParent.offset().top
		scrolling=$(window).scrollTop()
		moveval=(scrolling - offTop + winH)*moveRate
		console.log(moveval,'moveval')
		if(moveDir=='left'){
			objMove.css('transform','translateX(-'+moveval+'px)')
		}else{//top
			objMove.css('transform','translateY(-'+moveval+'px)')
		}
	}

})//document ready