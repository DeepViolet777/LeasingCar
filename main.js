
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


    /*
    Передаем селекторы, и данные для рейнджа.
    Находим элементы, на блоке для рейнджа создаем noUiSlider.
    На слайдер вешаем событие update, по нему обновляем value нашего инпута.
    На сам инпут вешаем установку значения слайдеру по blur.
    Возвращаем объект со элементами слайдера и инпута для удобства. В первом уже есть noUiSlider.
    Обработка значений, выходящих за крайние, у noUiSlider имеется из коробки.
    Фыр!
    */
    const initRange = (rangeSelector, inputSelector, range) => {
        const rangeElem = document.querySelector(rangeSelector);
        const inputElem = document.querySelector(inputSelector);

        if (!rangeElem || !inputElem) return;

        noUiSlider.create(rangeElem, {
            start: range.min,
            connect: 'lower',
            range,
            format: {
                to: val => Math.round(Number(val)),
                from: val => Number(val),
            }
        });

        rangeElem.noUiSlider.on('update', () => {
            inputElem.value = rangeElem.noUiSlider.get();
        })

        inputElem.addEventListener('blur', e => {
            rangeElem.noUiSlider.set(Number(e.target.value));
        });

        return {rangeElem, inputElem};
    };

    const carCostRange = initRange(
        '.car-cost_range',
        '.car-cost_num',
        {
            min: [1000000],
            max: [6000000],
        });

    const initFeeRange = initRange(
        '.init-fee_range',
        '.init-fee_percent',
        {
            min: [10],
            max: [60]
        });

    const leaseTermRange = initRange(
        '.lease-term_range',
        '.lease-term_num',
        {
            min: [1],
            max: [60]
        });


});














