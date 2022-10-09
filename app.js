
const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
// const container = document.querySelector('.container')               // закоментил как ненужное
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length
sidebar.style.top = `-${(slidesCount -1 ) * 100}vh`

let activeSlideIndex = 0

upBtn.addEventListener('click',() => {
    changeSlide('up')
})

downBtn.addEventListener('click',() => {
    changeSlide('down')
})

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slidesCount) 
        {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
    activeSlideIndex--
    if (activeSlideIndex < 0) {
        activeSlideIndex = slidesCount -1
    }
}


// const height = container.clientHeight                                // закоментил как ненужное

mainSlide.style.transform = `translateY(-${activeSlideIndex*100}vh)`    // поменял height}px на 100}vh для исправления дефекта, описанного ниже
sidebar.style.transform = `translateY(${activeSlideIndex*100}vh)`       // то же самое
}


// Моё исправление дефекта "При изменении размеров окна ПО ВЕРТИКАЛИ картинки немного тупят, и пока не прокрутишь слайд, висят в таком состоянии"
// mainSlide.style.transform = `translateY(-${activeSlideIndex*height}px)`
// sidebar.style.transform = `translateY(${activeSlideIndex*height}px)`
// }
// window.addEventListener("resize", function(event) {

//     mainSlide.style.transform = `translateY(-${activeSlideIndex*innerHeight}px)`
//     sidebar.style.transform = `translateY(${activeSlideIndex*innerHeight}px)`

// }, true);
