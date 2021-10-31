$(function () {
	$('.nav-toggle').click(function () {
		$('.header, .nav').toggleClass('active');
	});

	$(document).mouseup(function (e) {
		var $target = $(e.target);
		if ($target.closest(".nav-toggle").length == 0) {
			$(".header,.nav").removeClass("active");
		}
	});
	
	$('.accordion__header').click(function () {
		$(this).addClass('active').next().slideToggle();
		$('.accordion__header').not(this).removeClass('active').next().slideUp();
	});

	$('.team__avatars img:nth-child(1)').mouseover(function () {
		$('.team__avatars img:nth-child(2), img:nth-child(3)').removeClass("active");
		$(this).addClass("active");
		$(".team__name").text("Nina Williams");
	});

	$('.team__avatars img:nth-child(2)').mouseover(function () {
		$('.team__avatars img:nth-child(odd)').removeClass("active");
		$(this).addClass("active");
		$(".team__name").text("Sophie Turner");
	});

	$('.team__avatars img:nth-child(3)').mouseover(function () {
		$('.team__avatars img:nth-child(1), img:nth-child(2)').removeClass("active");
		$(this).addClass("active");
		$(".team__name").text("Martin Luter");
	});

});