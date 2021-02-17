$(document).ready(function() {

    $('input[type=tel]').mask("+7 (999) 999-99-99");

});

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

        function updateCardSliderHeight() {

            let cardSlider = document.querySelector('.card-slider'),
                cardSliderWidth = cardSlider.clientWidth,
                cardSliderHeight = cardSliderWidth * 1.38;

                if (cardSlider) {
                    cardSlider.style.height = cardSliderHeight + 'px';
                }

            return cardSliderHeight;
                
        }

        if (document.querySelector('.card-slider')) {

            let cardSlider = new Swiper('.card-slider', {
                slidesPerView: 1,
                spaceBetween: 0,
                pagination: {
                    el: '.card-slider__dots',
                    type: 'bullets'
                },
                mousewheel: true,
                breakpoints: {
                    950: {
                        direction: 'vertical',
                        height: updateCardSliderHeight(),
                    },
                    0: {
                        direction: 'horizontal',
                        autoHeight: true
                    }
                }
            });

        }

        const cardSliders = document.querySelectorAll('.cardSlider');

        cardSliders.forEach(function(item, index) {

            let name = 'cardSlider_' + index;

            item.classList.add(name);

            item.closest('.swiper-container').querySelectorAll('.slider-arrow').forEach(function(item) {item.classList.add('slider-arrow_' + index)});

            let popularSlider = new Swiper('.' + name, {
                speed: 600,
                spaceBetween: 40,
                slidesPerView: 4,
                slidesPerGroup: 4,
                observer: true,
                observeParents: true,
                touchEventsTarget: 'wrapper',
                navigation: {
                    prevEl: '.slider-arrow.slider-arrow__prev.card-arrow.slider-arrow_' + index,
                    nextEl: '.slider-arrow.slider-arrow__next.card-arrow.slider-arrow_' + index
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

        }); 

        document.addEventListener('click', function(event) {

            const { target } = event;

            if (target.closest('.menu-item__top')) {

                let item = target.closest('.menu-item');
                let body = item.querySelector('.menu-item__body');

                if (item.classList.contains('active')) {

                    item.classList.remove('active');
                    body.style.maxHeight = 0;

                } else {

                    item.classList.add('active');
                    body.style.maxHeight = body.scrollHeight + 'px';

                }

            }

            if (target.matches('.card-specs__item-value__img')) {

                let text = target.closest('.card-specs__item-value_copy').querySelector('span').textContent;

                navigator.clipboard.writeText(text);

            }
            
        });

    });

})()