 $(document).ready(function() {
  $(".hamburger").click(function() {
    $("body").toggleClass("mobile-menu-open")
  }),

  $(window).on("scroll", $.throttle(500, function() {
    var mainHeader = $(".main-header"),
        mobileHeader = $(".mobile-header ");
    $(".main-header").hasClass("sticky") && 0 == $(window).scrollTop() ? (mainHeader.removeClass("sticky"), mobileHeader.removeClass("sticky")) : (mainHeader.addClass("sticky"), mobileHeader.addClass("sticky"))
  }))
});