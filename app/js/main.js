// $(function(){
//  $('.top-slider__inner').slick({

//  });
// });

$(function () {
 $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
 });

 $(".star").rateYo({
   rating: 3,
   starWidth: "17px",
   normalFill: "#ccccce",
   ratedFill: "#ffc35b",
   numStars: "5",
   readOnly: true,
 });
});