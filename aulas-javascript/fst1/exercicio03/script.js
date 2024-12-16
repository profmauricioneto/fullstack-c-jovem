let currentIndex = 0;

function moverSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const carrosselLenght = slides.length;

    currentIndex = currentIndex + direction;
    console.log(currentIndex);

    // ate onde pode ir para direita
    if (currentIndex >= carrosselLenght) {
        currentIndex = 0;
    }

    // ate onde pode ir para esquerda
    if (currentIndex < 0) {
        currentIndex = carrosselLenght - 1;
    }

    let container = document.querySelector('#slides');
    let slideWidth = slides[0].offsetWidth;
    container.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}