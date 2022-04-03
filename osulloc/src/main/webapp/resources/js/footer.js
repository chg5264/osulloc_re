$(document).ready(function(){
	
	$(".top").click(function(e){

		$(document).scrollTop(document - e.pageY, 'easeInSine');
		/*$(document).animate({scrollTop:document - e.pageY}, 1500, 'easeInSine');*/
	})
	
	
	
})
