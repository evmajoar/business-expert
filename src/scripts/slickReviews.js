var $reviews=$(".reviews__list"),
$reviewsThumb=$(".reviews__thumb-list");

$reviews.slick({
  slidesToShow:1,
  slidesToScroll:1,
  arrows: false,
  fade: true,
  infinite: false,
  centerMode: true,
  asNavFor:$reviewsThumb,
  adaptiveHeight: true
  }),
  $reviewsThumb.slick({
    slidesToShow: 3,
    slidesToScroll:1,
    asNavFor:$reviews,
    infinite: true,
    arrows: false,
    dots:false,
    centerMode: true,
    lazyLoad:"ondemand",
    focusOnSelect: true,
  //  mobileFirst: true,
    responsive:[
      {
      breakpoint:769,
      settings:{
        slidesToShow:1,
        centerMode: false,
        infinite: true
        }
      }
    ]
});