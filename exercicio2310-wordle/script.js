const palavraOculta = "CLUBE";
let tentativas = [];

function verificarTentativa() {
    const tentativa = document.getElementById('tentativa').value.toUpperCase();
    if (tentativa.length !== 5) {
        alert("Digite exatamente 5 letras!");
        return;
    }

    tentativas.push(tentativa);
    atualizarFeedback(tentativa);
    document.getElementById('tentativa').value = "";

    if (tentativa === palavraOculta) {
        document.getElementById('mensagem').innerText = "Você acertou a palavra!";
    }
}

function atualizarFeedback(tentativa) {
    const feedbackDiv = document.getElementById('feedback');
    feedbackDiv.innerHTML = "";

    for (let i = 0; i < tentativa.length; i++) {
        const letra = tentativa[i];
        const divLetra = document.createElement('div');
        divLetra.className = 'letra';
        divLetra.innerText = letra;

        if (palavraOculta[i] === letra) {
            divLetra.classList.add('correto');
        } else if (palavraOculta.includes(letra)) {
            divLetra.classList.add('posicao-errada');
        } else {
            divLetra.classList.add('incorreto');
        }

        feedbackDiv.appendChild(divLetra);
    }
}

function reiniciarJogo() {
    tentativas = [];
    document.getElementById('feedback').innerHTML = "";
    document.getElementById('mensagem').innerText = "";
    document.getElementById('tentativa').value = "";
}