const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.video-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let videoIndex = 0;

function updateCarousel() {
    slides.forEach((slide, index) => {
        if (index === videoIndex) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

prevBtn.addEventListener('click', () => {
    if (videoIndex > 0) {
        videoIndex--;
    } else {
        videoIndex = slides.length - 1;
    }
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    if (videoIndex < slides.length - 1) {
        videoIndex++;
    } else {
        videoIndex = 0;
    }
    updateCarousel();
});

updateCarousel();

const menuToggle = document.querySelector('.header-burger');
const menu = document.querySelector('.header-burger-menu');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
});
