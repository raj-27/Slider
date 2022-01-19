let slider = document.querySelector('.slider').children;
console.log(slider);
let leftBtn = document.querySelector('.btn-left');
let rightBtn = document.querySelector('.btn-right');
let count = 0;

rightBtn.addEventListener('click', (e) => {
    if (count == slider.length - 1) {
        count = 0;
    } else {
        count++;
    }
    showSlide();
})

leftBtn.addEventListener('click', (e) => {
    if (count == 0) {
        count = slider.length - 1;
    } else {
        count--;
    }
    showSlide();
})


function showSlide() {
    for (let i = 0; i < slider.length; i++) {
        slider[i].classList.remove('active')
    }
    slider[count].classList.add('active')
}