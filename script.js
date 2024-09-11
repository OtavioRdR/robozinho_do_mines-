document.getElementById('accessButton').addEventListener('click', function() {
    window.location.href = 'https://link-para-sala-de-sinais.com';
});

// Timer de contagem regressiva
let timeInSeconds = 10 * 60; // Tempo em segundos (10 minutos)
const countdownTimer = setInterval(function() {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    document.getElementById('timer').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    timeInSeconds -= 1;
    if (timeInSeconds < 0) {
        clearInterval(countdownTimer);
        document.getElementById('countdown').textContent = "A promoção acabou!";
    }
}, 1000);
