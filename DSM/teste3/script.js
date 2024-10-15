
let index = 0;

function mostrarImagem(n) {
    const imagens = document.querySelectorAll('.imagens img');
    const totalImagens = imagens.length;


    if (n >= totalImagens) index = 0;

    if (n < 0) index = totalImagens - 1;


    const translateX = -index * 100; 
    document.querySelector('.imagens').style.transform = `translateX(${translateX}%)`;
}

function mudarImagem(n) {
    index += n;
    mostrarImagem(index);
}

mostrarImagem(index);
/* 
setInterval(() => mudarImagem(1), 3000  ); */