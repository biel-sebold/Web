function calcularSoma() {
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;
    const soma = num1 + num2;
    document.getElementById('resultadoSoma').innerText = `Soma: ${soma}`;
}

function compararNumeros() {
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;
    const div = document.getElementById('resultadoComparacao');
    if (num1 > num2) {
        div.innerText = "Primeiro número é maior";
        div.style.backgroundColor = "red";
    } else if (num2 > num1) {
        div.innerText = "Segundo número é maior";
        div.style.backgroundColor = "green";
    } else {
        div.innerText = "Ambos são iguais";
        div.style.backgroundColor = "yellow";
    }
}

function atualizarEco() {
    const texto = document.getElementById('campoTexto').value;
    document.getElementById('eco').innerText = texto;
}

function mostrarTamanho() {
    const texto = document.getElementById('campoTexto').value;
    document.getElementById('tamanho').innerText = `O tamanho atual do campo é de: ${texto.length}`;
}

function adicionarLinha() {
    const tabela = document.getElementById('tabela');
    const novaLinha = tabela.insertRow();
    for (let i = 0; i < 3; i++) {
        const novaCelula = novaLinha.insertCell();
        novaCelula.innerText = `Nova Célula ${i + 1}`;
    }
}