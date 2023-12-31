let offset = 0
const sliderLine = document.querySelector('.one-line')

document.querySelector('.next').addEventListener('click', () => {
    offset = offset + 1220;
    if (offset > 2440) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px'
})


document.querySelector('.prev').addEventListener('click', () => {
    offset = offset - 1220;
    if (offset < 0) {
        offset = 2440;
    }
    sliderLine.style.left = -offset + 'px'
})