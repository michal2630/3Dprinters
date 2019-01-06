	// Scroll

$(document).ready(function() {

	var scrolllink = $(".scroll");

	scrolllink.click(function(event) {
		event.preventDefault();
		$("body, html").animate({
			scrollTop: $(this.hash).offset().top
		}, 900 )
	})
});


	// Paralax



$(document).ready(function() {


if( $(window).width() > 1350) {

	$(window).scroll(function() {
		parallax();

	})

function parallax() {
	var wScroll = $(window).scrollTop();

	$(".parallax").css("background-position", 
		"center " + (wScroll*0.75) + "px")
	}

} 

});
