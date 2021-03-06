 $(document).ready(function() {


	AOS.init({
		offset: 500,
		mirror: true
	});

  $(".hamburger").click(function() {
    $("body").toggleClass("mobile-menu-open")
  }),

  $(window).on("scroll", $.throttle(500, function() {
    var mainHeader = $(".main-header"),
        mobileHeader = $(".mobile-header ");
    $(".main-header").hasClass("sticky") && 0 == $(window).scrollTop() ? (mainHeader.removeClass("sticky"), mobileHeader.removeClass("sticky")) : (mainHeader.addClass("sticky"), mobileHeader.addClass("sticky"))
  }))


let dl = document.querySelector("#accordion");
let dt = dl.querySelectorAll("dt");
let dd = dl.querySelectorAll("dd");
let closeAlldd = true;

for (let i = 0, len = dt.length; i < len; i++) {
let sp = dt[i].querySelector("span");

dt[i].onclick = function() {
	if (!dd[i].hasAttribute('class')) {
		if (closeAlldd) {
			for (var j = 0; j < dd.length; j++) {
				dt[j].querySelector('span').innerHTML = '<img src="./images/arrow-down.svg" alt="arrow-down">';
				dd[j].removeAttribute('class');
			}
		}
		sp.innerHTML = '<img src="./images/arrow-up.svg" alt="arrow-up">';
		dd[i].setAttribute('class', 'dd-current');
		//dt[i].setAttribute('class', 'dt-active');
	} else {
		sp.innerHTML = '<img src="./images/arrow-down.svg" alt="arrow-down">';
		dd[i].removeAttribute('class');
		//dt[i].removeAttribute('class');
	}
}
}

imagesA = $("#img-accordion > img").hide();
imagesA.first().show();

 $("#accordion dt").click(function() {
 	$("#accordion dt").removeClass("dt-active");
    $(this).addClass("dt-active");
 	let panel = $(this),
 		tabName = panel.attr("tab-name"),
 		image = $("#" + tabName + "-img");

 	imagesA.slideUp();
 	image.slideDown();

 	return false;
 });



});


  
