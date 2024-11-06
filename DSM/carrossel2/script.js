let currentIndex = 1; // Índice da imagem atual
const images = document.querySelectorAll('.carousel-images img');
const dots = document.querySelectorAll('.dot');

// Função para exibir a imagem atual
function showSlide(index) {
  if (index > images.length) {
    currentIndex = 1;
  } else if (index < 1) {
    currentIndex = images.length;
  } else {
    currentIndex = index;
  }

  // Atualiza a posição das imagens
  document.querySelector('.carousel-images').style.transform = `translateX(-${(currentIndex - 1) * 100}%)`;

  // Atualiza as bolinhas ativas
  dots.forEach((dot, idx) => {
    dot.classList.remove('active');
    if (idx === currentIndex - 1) {
      dot.classList.add('active');
    }
  });
}

// Função para mudar a imagem ao clicar na bolinha
function currentSlide(index) {
  showSlide(index);
}

// Função para mover as imagens para a esquerda ou para a direita
function moveSlide(direction) {
  showSlide(currentIndex + direction);
}

// Inicializa o carrossel
showSlide(currentIndex);
