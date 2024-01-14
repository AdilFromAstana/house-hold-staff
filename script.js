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
const menu = document.querySelector('.header-burger-menu-wrapper');
const closeBurgerMenu = document.querySelector('#header-burger-menu-close');
const burgerMenuItems = document.querySelectorAll('.header-burger-menu-item');

burgerMenuItems.forEach((burgerMenuItem) => {
    burgerMenuItem.addEventListener('click', () => {
        menu.style.display = 'none';
        document.body.classList.remove('modal-open');
    });
});

closeBurgerMenu.addEventListener('click', () => {
    menu.style.display = 'none';
    document.body.classList.remove('modal-open');
});

menuToggle.addEventListener('click', () => {
    menu.style.display = 'flex';
    document.body.classList.add('modal-open');
});

const modal = document.getElementById('imageModal');
const openModalBtns = document.querySelectorAll('.section-2-item-img');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalImage = document.querySelector('#imageModal img');
const nextImageBtn = document.getElementById('nextImageBtn');
const prevImageBtn = document.getElementById('prevImageBtn');
let currentIndex = 0;

openModalBtns.forEach((openModalBtn, index) => {
    openModalBtn.addEventListener('click', () => {
        const imgSrc = openModalBtn.getAttribute('src');

        modalImage.setAttribute('src', imgSrc);

        currentIndex = index;

        modal.style.display = 'flex';
        document.body.classList.add('modal-open');
    });
});

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
});

nextImageBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % openModalBtns.length;
    const imgSrc = openModalBtns[currentIndex].getAttribute('src');
    modalImage.setAttribute('src', imgSrc);
});

prevImageBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + openModalBtns.length) % openModalBtns.length;
    const imgSrc = openModalBtns[currentIndex].getAttribute('src');
    modalImage.setAttribute('src', imgSrc);
});
