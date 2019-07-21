var $examples = $('.examples__carousel'),
    $examplePrevBtn = $('.examples__controls-button--prev'),
    $exampleNextBtn = $('.examples__controls-button--next'),
    $menuCounterThis = $('.examples__controls-counter-this'),
    $menuCounterTotal = $('.examples__controls-counter-total');

$examples.on('init afterChange', function(event, slick){
  $menuCounterThis.text(slick.currentSlide + 1);
  $menuCounterTotal.text(slick.slideCount);
}).slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: false,
  lazyLoad: 'ondemand',
  prevArrow: $examplePrevBtn,
  nextArrow: $exampleNextBtn,
});