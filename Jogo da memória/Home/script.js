document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.querySelector('button');
    playButton.addEventListener('click', () => {
        // Redireciona para o index do jogo, saindo da pasta "home"
        window.location.href = "../jogo/index.html";
    });
});
