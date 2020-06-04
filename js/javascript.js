$(document).ready(function(){


	$('.video').click(function(){
		$('#facebookarchive').fadeOut('fast');
		$('#facebookarchivevideo').fadeIn('slow');
	});

	$('.turnoff').click(function(){
		$('#facebookarchive').fadeIn('slow');
		$('#facebookarchivevideo').fadeOut('fast');
		
	});

var tap = ("ontouchstart" in document.documentElement);

if(tap){
	$('.responsiveback, .responsivenote').css("display","none");
}

$(window).mouseenter(function(){
	$('.responsiveback, .responsivenote').fadeOut("slow");
});


$(window).scroll(_.debounce(function(){
    $('#navbackground').css("box-shadow", "rgba(0,0,0,0.16) 0 2px 4px");
}, 150, { 'leading': true, 'trailing': false }));

$(window).scroll(_.debounce(function(){
    $('#navbackground').css("box-shadow", "none");
}, 150));

});
