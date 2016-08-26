$(document).ready(function() {

var owl = $(".carousel");
owl.owlCarousel({
items : 1,
pagination:true,
autoHeight : true
});
owl.on("mousewheel", ".owl-wrapper", function (e) {
if (e.deltaY > 0) {
owl.trigger("owl.prev");
} else {
owl.trigger("owl.next");
}
e.preventDefault();
});
});
  $('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		} 

	});