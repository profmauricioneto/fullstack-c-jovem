let indiceAtual = 0;

function moverSlide(direcao) {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  // Atualiza o índice do slide atual
  indiceAtual += direcao;

  // Se o índice ultrapassar o total de slides, volta para o primeiro
  if (indiceAtual >= totalSlides) {
    indiceAtual = 0;
  }
  // Se o índice for menor que 0, vai para o último slide
  if (indiceAtual < 0) {
    indiceAtual = totalSlides - 1;
  }

  // Mover os slides
  const slidesContainer = document.querySelector('.slides');
  const larguraDoSlide = slides[0].offsetWidth;
  slidesContainer.style.transform = `translateX(-${indiceAtual * larguraDoSlide}px)`;
}
