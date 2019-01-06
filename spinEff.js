$(window).scroll(function() {
var theta = $(window).scrollTop() / 50 % Math.PI;
$('#logo').css({ transform: 'rotate(' + theta + 'rad)' });
});
