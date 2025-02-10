//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);
    input.value = ""; // Limpa o campo de entrada
    atualizarLista();
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de adicionar os novos itens

    for (let amigo of amigos) {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione amigos antes de sortear!");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];
    
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";
    const li = document.createElement("li");
    li.textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;
    resultadoLista.appendChild(li);
}
