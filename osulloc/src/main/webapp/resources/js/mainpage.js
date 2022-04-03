$(document).ready(function() {

	let i = 0;

	setInterval(function() {

		console.log(i);

		$(".msPager li:nth-child(5)").removeClass("on");

		// nth-child사용 시 + 는 연결용
		$(".msPager li:nth-child(" + i + ")").removeClass("on"); // 1 2 3 4 5
		imgslide(i);

		$(".msPager li:nth-child(" + (i + 1) + ")").addClass("on");// 0 1 2 3 4

		i++;

		if (i == 5) {

			i = 0;

		}

	}, 2000)

	// 본문 페이지 제품 칸 슬라이드

	$(".main3_r a").on("click", function(e) {

		e.preventDefault();
		/*$(".m3_item li").first().appendTo(".m3_item ul");*/
		for(var n=0; n<4; n++){
			$(".m3_item li").first().appendTo(".m3_item ul");
		}

	})

	$(".main3_l a").on("click", function(e) {

		e.preventDefault();
		/*$(".m3_item li").last().prependTo(".m3_item ul");*/
		for(var n=0; n<4; n++){
			$(".m3_item li").last().prependTo(".m3_item ul");
		}

	})

	$(".main4_r a").on("click", function(e) {

		e.preventDefault();
		/*$(".m4_item li:nth-child(n+4)").appendTo(".m4_item ul");*/
		for(var n=0; n<4; n++){
			$(".m4_item li").first().appendTo(".m4_item ul");
		}

	})

	$(".main4_l a").on("click", function(e) {

		e.preventDefault();
		/*$(".m4_item li").last().prependTo(".m4_item ul");*/

		for(var n=0; n<4; n++){
			$(".m4_item li").last().prependTo(".m4_item ul");
		}

	})
	
	//cursor
	
	$("a").on("mouseover", function(){
		/*$(".cursor").css('background-color', 'rgb(54, 102, 81)');
		$(".cursor").css('border', 'rgb(54, 102, 81)');*/
		$(".cursor").css('background-color', '#9ac4a1');
		$(".cursor").css('border', '#9ac4a1');
	})
	
	$("a").on("mouseout", function(){
		$(".cursor").css('background-color', '#fff');
		$(".cursor").css('border-color', 'rgb(54, 102, 81)');

	})

})// jQuery 끝

let msImg = document.querySelector(".msImg");
let magazine = document.querySelector(".magazine");

function imgslide(c) {

	let imgs = [ "다운로드 (3).jpg", "차.jpg", "tea_time4.jpg", "tea_img.jpg",
			"tea_time1.jpg" ];

	magazine.setAttribute("src", "../resources/img/" + imgs[c]);

}