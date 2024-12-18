let indiceAtual = 0;

function mover(direcao) {
    const slides = document.querySelectorAll('.slide');
    const totalDeSlides = slides.length;

    indiceAtual = indiceAtual + direcao;

    if (indiceAtual >= totalDeSlides) {
        indiceAtual = 0;
    }

    if (indiceAtual < 0) {
        indiceAtual = totalDeSlides - 1;
    }

    let slidesElement = document.querySelector('#slides');
    let larguraSlide = slides[0].offsetWidth;
    slidesElement.style.transform = `translateX(-${indiceAtual * larguraSlide}px)`;
}