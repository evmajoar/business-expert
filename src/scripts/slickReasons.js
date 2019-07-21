  var $reasons = $( '.reasons__list' ),
      $reasonsThumb = $( '.reasons__thumb-list' ),
      $reasonsPrevBtn = $( '.reasons__control-button--prev' ),
      $reasonsNextBtn = $( '.reasons__control-button--next' );

$reasons.slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  infinite: false,
  asNavFor: $reasonsThumb,
  adaptiveHeight: true
});

$reasonsThumb.slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: $reasons,
  infinite: false,
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  // draggable: false,
  mobileFirst: true,
  prevArrow: $reasonsPrevBtn,
  nextArrow: $reasonsNextBtn,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        centerMode: false,
      }
    }
  ]
});