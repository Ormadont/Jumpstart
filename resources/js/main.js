$(document).ready(function(){
  $('.carousel').slick({
    autoplay: true,
    arrows: false,
    autoplaySpeed: 4000,
    pauseOnFocus: false,
    pauseOnHover: false,
    draggable: false,
  });
  var lastScroll = 0;
  $(window).scroll(function(){
    var scroll = $(this).scrollTop();
    if ((scroll - lastScroll) > 50){
      var navHeight = $('.navbar').css('height');
      $('.navbar').animate({top: '-' + navHeight}, 150);
      lastScroll = scroll;
    } else if ((lastScroll - scroll) > 50) {
      $('.navbar').animate({top: '0px'}, 150);
      lastScroll = scroll;
    }
  });
});
