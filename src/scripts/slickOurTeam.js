var $ourTeam = $( '.our-team__list' ),
    $ourTeamThumb = $( '.our-team__thumb-list' ),
    $ourTeamPrevBtn = $( '.our-team__controls-button--prev' ),
    $ourTeamNextBtn = $( '.our-team__controls-button--next' ),
    $ourTeamCounterThis = $( '.our-team__controls-counter-this' ),
    $ourTeamCounterTotal = $( '.our-team__controls-counter-total' );

$ourTeam.on('init afterChange', function(event, slick){
  $ourTeamCounterThis.text(slick.currentSlide + 1);
  $ourTeamCounterTotal.text(slick.slideCount);
}).slick({
slidesToShow: 1,
slidesToScroll: 1,
arrows: false,
fade: true,
infinite: false,
asNavFor: $ourTeamThumb,
adaptiveHeight: false
});

$ourTeamThumb.slick({
//slidesToShow: 1,
//slidesToScroll: 1,
asNavFor: $ourTeam,
vertical: true,
verticalSwiping: true,
infinite: true,
dots: false,
centerMode: true,
focusOnSelect: true,
// draggable: false,
//mobileFirst: true,
prevArrow: $ourTeamPrevBtn,
nextArrow: $ourTeamNextBtn,
responsive: [
  {
    breakpoint: 769,
    settings: {
      vertical: false,
      verticalSwiping: false,
      slidesToShow: 2,
      centerMode: false,
    }
  },
  {
    breakpoint: 577,
    settings: {
      vertical: false,
      verticalSwiping: false,
      slidesToShow: 1,
      centerMode: true,
    }
  }
]
});