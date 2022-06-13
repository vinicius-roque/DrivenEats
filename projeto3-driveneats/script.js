let pratoNome;
let pratoPreco;
let bebidaNome;
let bebidaPreco;
let sobremesaNome;
let sobremesaPreco;
let total;

function selecionarPrato(elemento, preco) {
    const selecionadoAntes = document.querySelector(".prato .selecionado");

    if (selecionadoAntes !== null) {
        selecionadoAntes.classList.remove("selecionado");
    }

    elemento.classList.add("selecionado");

    pratoNome = document.querySelector(".prato .selecionado p").innerHTML;
    pratoPreco = preco;

    liberarPedido();
}

function selecionarBebida(elemento, preco) {
    const selecionadoAntes = document.querySelector(".bebida .selecionado");

    if (selecionadoAntes !== null) {
        selecionadoAntes.classList.remove("selecionado");
    }
    
    elemento.classList.add("selecionado");

    bebidaNome = document.querySelector(".bebida .selecionado p").innerHTML;
    bebidaPreco = preco;

    liberarPedido();
}

function selecionarSobremesa(elemento, preco) {
    const selecionadoAntes = document.querySelector(".sobremesa .selecionado");

    if (selecionadoAntes !== null) {
        selecionadoAntes.classList.remove("selecionado");
    }

    elemento.classList.add("selecionado");

    sobremesaNome = document.querySelector(".sobremesa .selecionado p").innerHTML;
    sobremesaPreco = preco;

    liberarPedido();
}

function liberarPedido() {
    const botaoBloqueado = document.querySelector(".pedidoBloqueado");
    const botaoLiberado = document.querySelector(".pedidoLiberado");

    if (pratoNome && bebidaNome && sobremesaNome) {
        botaoBloqueado.classList.add("hide");
        botaoLiberado.classList.remove("hide");
    } 
}

function fecharPedido() {

    const Nome = prompt("Digite aqui seu nome: ");
    const Endereco = prompt("E aqui o seu endereço: ");

    const mensagem = 
    `Olá, gostaria de fazer o pedido:
    - Prato: ${pratoNome}
    - Bebida: ${bebidaNome}
    - Sobremesa: ${sobremesaNome}
    Total: R$ ${total}
    
    Nome: ${Nome}
    Endereço: ${Endereco}`;
      
    let link = encodeURIComponent(mensagem);

    window.open("https://wa.me/?text=" + link)

}

function avancar() {
    const elemento = document.querySelector(".validar");
    elemento.classList.remove("hide");

    total = pratoPreco + bebidaPreco + sobremesaPreco;

    total = total.toFixed(2);
    pratoPreco = pratoPreco.toFixed(2);
    bebidaPreco = bebidaPreco.toFixed(2);
    sobremesaPreco = sobremesaPreco.toFixed(2);

    let nome = document.querySelector(".confirmacao .prato :nth-child(1)");
    let preco = document.querySelector(".confirmacao .prato :nth-child(2)");
    nome.innerHTML = pratoNome;
    preco.innerHTML = pratoPreco;

    nome = document.querySelector(".confirmacao .bebida :nth-child(1)");
    preco = document.querySelector(".confirmacao .bebida :nth-child(2)");
    nome.innerHTML = bebidaNome;
    preco.innerHTML = bebidaPreco;

    nome = document.querySelector(".confirmacao .sobremesa :nth-child(1)");
    preco = document.querySelector(".confirmacao .sobremesa :nth-child(2)");
    nome.innerHTML = sobremesaNome;
    preco.innerHTML = sobremesaPreco;

    preco = document.querySelector(".confirmacao .total :nth-child(2)");
    preco.innerHTML = total;
}

function voltar() {
    const elemento = document.querySelector(".validar");
    elemento.classList.add("hide");

    document.location.reload();
}