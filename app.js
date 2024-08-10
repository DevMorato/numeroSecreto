let numeroSecreto = numeroAleatorio();
console.log(numeroSecreto);
let tentativas = 1;
let listaNumeros = [];

function mensagemInicial () {
    alteraTextoNaTela('h1', 'Jogo do número secreto');
    alteraTextoNaTela('p', 'Escolha um número de 1 a 100');
}

mensagemInicial();

function alteraTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}

function verificarChute() {
    let chute = parseInt(document.querySelector('input').value);
    
    if (chute == numeroSecreto) {
        alteraTextoNaTela('p', 'Você acertou!!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número com ${tentativas} ${palavraTentativas}`;
        alteraTextoNaTela ('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            alteraTextoNaTela('p', 'O número secreto é menor');
        } else {
            alteraTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas ++;
    }
}

function numeroAleatorio () {
    return parseInt((Math.random() * 100) + 1);
    
}

function limparCampo() {
    document.getElementById('reiniciar').setAttribute('disabled', true);

}

function novoJogo() {
    mensagemInicial();
    limparCampo();
    document.querySelector('input').innerHTML = 0;
    tentativas = 1;
}
