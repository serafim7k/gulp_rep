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

 $('.shop-content__filter-btn').on('click', function() {
  $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
  $(this).addClass('shop-content__filter-btn--active');
 });

 $('.button-list').on('click', function() {
   $('.product-item').addClass('product-item--list');
 })
 
 $('.button-grid').on('click', function() {
   $('.product-item').removeClass('product-item--list');
 })
 
 $('.select-style').styler();

 $(".star").rateYo({
   rating: 3,
   starWidth: "17px",
   normalFill: "#ccccce",
   ratedFill: "#ffc35b",
   numStars: "5",
   readOnly: true,
 });

 function initializeClock(id, endtime) {
  const clock = document.querySelector('.promo__clock');
  const daysSpan = clock.querySelector('.promo__days');
  const hoursSpan = clock.querySelector('.promo__hours');
  const minutesSpan = clock.querySelector('.promo__minutes');
  const secondsSpan = clock.querySelector('.promo__seconds');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

const deadline = $('.promo__clock').attr('data-time');
initializeClock('promo__clock', deadline);
});



function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  
  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
  
  
}

