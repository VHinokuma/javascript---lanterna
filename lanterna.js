const canvas = document.getElementById('meuCanvas');
const ctx = canvas.getContext('2d');

const img = new Image();
img.src = 'Interview with a deer.jpeg';

let imagemCarregada = false;

img.onload = function() {
    imagemCarregada = true;
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 400, 400);
};

canvas.addEventListener('mousemove', function(e) {
    if (!imagemCarregada) return;

    const x = e.offsetX;
    const y = e.offsetY;

    // 1. Pinta tudo de preto
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 400, 400);

    // 2. Salva o estado atual e cria o recorte circular
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, 80, 0, 2 * Math.PI); // 80 é o raio do círculo
    ctx.clip();

    // 3. Desenha a imagem (só aparece dentro do círculo)
    ctx.drawImage(img, 0, 0, 400, 400);

    // 4. Restaura o canvas para o próximo movimento
    ctx.restore();
});

canvas.addEventListener('mouseleave', function() {
    if (!imagemCarregada) return;
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 400, 400);
});