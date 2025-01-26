let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
}
function exibirMensagemInicial() {
    exibirTextoNaTela('h1','Jogo do numero secreto');
    exibirTextoNaTela('p','Escolha um número entre 1 e 10');
}
exibirMensagemInicial();

 function verificarChute(){
   // console.log('o botao foi clicado');
    let chute = document.querySelector('input').value; // para pegar so o valor de dentro da input
    
    if (chute == numeroSecreto){
    exibirTextoNaTela('h1','Certou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled'); //procurar o elemento pelo id, remover o atributo do id
    } else{
        if (chute > numeroSecreto){
            exibirTextoNaTela ('p' , ' O numero secreto é menor');
        }else{
            exibirTextoNaTela('p', 'O numero secreto é maior');
        }
        tentativas ++;
        limparCampo();
    }

 }
 
 function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() *numeroLimite +1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados =[];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)) //esse metodo verifica se o elemento esta na lista
    {   return gerarNumeroAleatorio();
    }   else{
        listaDeNumerosSorteados.push(numeroEscolhido);// esse metodo é usado para incluir na lista o numero escolhido na ultima posição e o metodo pop exclui o ultmo da lista.
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true); //set botar um atributo novo no caso esta botando de novo, true para habilitar 
      
} 