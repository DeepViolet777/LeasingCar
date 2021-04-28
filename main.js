
$(document).ready(function(){
    $('.slick-slider').slick({
      slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  infinite:true,
  fade: true,
  cssEase: 'linear',
  speed: 500,
  swipeToSlide: true,
    });

   /* var mySlider = document.
    rangesliderJs.create(mySlider);

    rangesliderJs.create(mySlider, {
      onInit: (value, percent, position) => {},
      onSlideStart: (value, percent, position) => {},
      onSlide: (value, percent, position) => {},
      onSlideEnd: (value, percent, position) => {}
    });*/
  });

    const carCostRange = document.querySelector('.car-cost_range')

    const initFeeRange = document.querySelector('.init-fee_range')

    const leaseTermRange = document.querySelector('.lease-term_range')

noUiSlider.create(carCostRange, {
    start: [1000000],
    connect: 'lower',
    range: {
        'min': [1000000],
        'max': [6000000]
    }

 

  });

  noUiSlider.create(initFeeRange, {
    start: [1000000],
    connect: 'lower',
    range: {
        'min': [1000000],
        'max': [6000000]
    }

  });


  noUiSlider.create(leaseTermRange, {
    start: [1000000],
    connect: 'lower',
    range: {
        'min': [1000000],
        'max': [6000000]
    }

 

  });















