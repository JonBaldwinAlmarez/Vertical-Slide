const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const sliderLeft = document.querySelector('.left-slide');
const downButton = document.querySelector('.down-button');
const upButton = document.querySelector('.up-button');
const slidesLength = slideRight.querySelectorAll('div').length;     //  Get all the back ground images.

let activeSlideIndex = 0 ;      // Active slide index

sliderLeft.style.top = `-${(slidesLength - 1) * 100}vh`   ;

upButton.addEventListener('click' , () => changeSlide ('up'))   ;       // Call function and pass arguement 'up'
downButton.addEventListener('click' , () => changeSlide('down'))   ;       //Call function and pass arguement 'down'

// Code below change slide

const changeSlide = (direction) => {
        const sliderHeight = sliderContainer.clientHeight   ; // Get the height of the slide
        if(direction === 'up') {
            activeSlideIndex++ ; // add the activeSlideIndex when direction is up
            if (activeSlideIndex > slidesLength - 1) {
                activeSlideIndex = 0 ;
            }
    }
    else if (direction === 'down') {
        
        activeSlideIndex-- ;
        if (activeSlideIndex < 0)   {
            activeSlideIndex = slidesLength - 1 ; // Minus the activeSlideIndex when direction is down
        }
    }
            // This change the picture. up and down (-)
            slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)` // Down
            sliderLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)` // Up
}