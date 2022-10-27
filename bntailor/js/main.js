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

	/* fabric 이미지 스크롤 효과 */
	let scrolling
	let moveTop
	fabricScroll() //로딩됬을때 한번
	$(window).scroll(function(){ //스크롤 할때마다 실행하는 함수
		fabricScroll()
	})

	function fabricScroll(){ //스크롤 값을 계산해서 fabric의 이미지를 움직일 함수
		/* 스크롤값을 요소의 위치값으로 변경해서 스타일을 적용
			효과를 줄 요소가 화면의 하단에 등장하기 시작했을때부터
			스크롤 한값을 새로 계산해서 해당 요소에 줘야 해당요소가 화면 어디에 배치되어 있든 
			자연스럽게 패럴럭스 효과를 줄수 있음*/
		scrolling=$(window).scrollTop()
		console.log(scrolling)
		moveTop=scrolling*0.15
		$('.fabric .bg img').css('transform','translate(0,-'+moveTop+'px)')
	}

})//document ready