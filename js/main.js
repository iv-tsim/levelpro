(function() {

    document.addEventListener('DOMContentLoaded', function() {

        function addZero(number) {

            if (number < 10) {

                return '0' + number;

            } else {

                return number;

            }

        }

        if (document.querySelector('section.app')) {

            let circle = document.querySelector('.app-dec__circle');

            circle.style.width = circle.offsetHeight + 'px';
            circle.style.borderWidth = circle.offsetHeight / 5 + 'px';

        }

        let fashionSlider = new Swiper('.fashion-slider', {

            speed: 600,
            spaceBetween: 15,
            slidesPerView: 1,
            slidesPerGroup: 1,
            observer: true,
            observeParents: true,
            touchEventsTarget: 'wrapper',
            navigation: {
                prevEl: '.slider-arrow.slider-arrow__prev.fashion-arrow',
                nextEl: '.slider-arrow.slider-arrow__next.fashion-arrow'
            },
            pagination: {
                el: '.slider-count',
                type: 'custom',
                renderCustom: function (swiper, current, total) {
                    return '<div class="slider-count__current">' + addZero(current) + '</div>' +
                            '<div class="slider-count__dec"></div>' +
                            '<div class="slider-count__total">' + addZero(total) + '</div>';
                }
            }

        });

        let instSlider = new Swiper('.inst-slider', {

            speed: 600,
            spaceBetween: 40,
            slidesPerView: 2,
            slidesPerGroup: 2,
            observer: true,
            observeParents: true,
            touchEventsTarget: 'wrapper',
            navigation: {
                prevEl: '.slider-arrow.slider-arrow__prev.inst-arrow',
                nextEl: '.slider-arrow.slider-arrow__next.inst-arrow'
            },
            pagination: {
                el: '.slider-count',
                type: 'custom',
                renderCustom: function (swiper, current, total) {
                    return '<div class="slider-count__current">' + addZero(current) + '</div>' +
                            '<div class="slider-count__dec"></div>' +
                            '<div class="slider-count__total">' + addZero(total) + '</div>';
                }
            }

        });

        let starSlider = new Swiper('.star-slider', {

            speed: 600,
            spaceBetween: 40,
            slidesPerView: 3,
            slidesPerGroup: 3,
            observer: true,
            observeParents: true,
            touchEventsTarget: 'wrapper',
            navigation: {
                prevEl: '.slider-arrow.slider-arrow__prev.star-arrow',
                nextEl: '.slider-arrow.slider-arrow__next.star-arrow'
            },
            pagination: {
                el: '.slider-count',
                type: 'custom',
                renderCustom: function (swiper, current, total) {
                    return '<div class="slider-count__current">' + addZero(current) + '</div>' +
                            '<div class="slider-count__dec"></div>' +
                            '<div class="slider-count__total">' + addZero(total) + '</div>';
                }
            }

        });

        let partnersSlider = new Swiper('.partners-slider', {

            speed: 600,
            spaceBetween: 60,
            slidesPerView: 5,
            slidesPerGroup: 3,
            observer: true,
            observeParents: true,
            navigation: {
                prevEl: '.partners-slider__arrow.partners-slider__arrow_prev',
                nextEl: '.partners-slider__arrow.partners-slider__arrow_next'
            },
            pagination: {
                el: '.partners-slider__dots',
                type: 'bullets',
                clickable: true
            },

        });

        document.addEventListener('click', function(event) {

            const { target } = event;


            
        });

    });

})()