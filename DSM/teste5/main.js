let index = 0;

function mostrarImagem(n) {
    const imagens = document.querySelectorAll('.imagem-container');
    const totalImagens = imagens.length;

    index = (n + totalImagens) % totalImagens; // Ajuste para não ultrapassar limites

    const translateX = -index * (100 / 3); // Ajuste a porcentagem para 3 imagens
    document.querySelector('.imagens').style.transform = `translateX(${translateX}%)`;
}

function mudarImagem(n) {
    index += n;
    mostrarImagem(index);
}

mostrarImagem(index);
