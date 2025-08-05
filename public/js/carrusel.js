let index = 0;
const slides = document.getElementById('slides');
const total = slides.children.length;

function showSlide(i) {
    index = (i + total) % total;
    slides.style.transform = `translateX(-${index * 100}%)`;
}

function moveSlide(step) {
    showSlide(index + step);
}

// Carrusel automático
setInterval(() => {
    moveSlide(1);
}, 5000);

// Swipe para móviles
let startX = 0;
const slider = document.getElementById('slider');

slider.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
});

slider.addEventListener('touchend', e => {
    let endX = e.changedTouches[0].clientX;
    if (endX < startX - 50) moveSlide(1);
    else if (endX > startX + 50) moveSlide(-1);
});
