document.addEventListener('DOMContentLoaded', () => {
    const playAgainButton = document.querySelector('button');
    playAgainButton.addEventListener('click', () => {
        // Redireciona para o jogo, considerando que a pasta "jogo" está no mesmo nível da pasta "final"
        window.location.href = "../jogo/index.html";
    });
});
