async function buscarCep() {

    const inputCep = document.getElementById("input_cep");

    if (inputCep.value.trim() == "") {
        alert("Por favor, preencha o campo com o cep");
        return;
    }

    const valorCep = inputCep.value;
    console.log("buscando cep " + valorCep);
    const apiResposta = await fetch("https://brasilapi.com.br/api/cep/v2/" + valorCep);

    const dadosAPI = await apiResposta.json();

    document.getElementById("input_estado").value = dadosAPI.state || "";
    document.getElementById("input_cidade").value = dadosAPI.city || "";
    document.getElementById("input_bairro").value = dadosAPI.neighborhood || "";
    document.getElementById("input_rua").value = dadosAPI.street || "";

}

function salvarCep() {

    const Endereco = {
        estado: document.getElementById("input_estado").value,
        cidade: document.getElementById("input_cidade").value,
        bairro: document.getElementById("input_bairro").value,
        rua: document.getElementById("input_rua").value
    }

    const tabela = document.getElementById("tabela_Endereços");
    const linhas = tabela.rows;

    for (let i = 1; i < linhas.length; i++) {
        const celulas = linhas[i].cells;

        if (
            celulas[0].textContent === Endereco.estado &&
            celulas[1].textContent === Endereco.cidade &&
            celulas[2].textContent === Endereco.bairro &&
            celulas[3].textContent === Endereco.rua
        ) {
            alert("Este endereço já foi adicionado.");
            return;
        }
    }

    const novaLinha = tabela.insertRow(-1);

    novaLinha.insertCell(0).textContent = Endereco.estado;
    novaLinha.insertCell(1).textContent = Endereco.cidade;
    novaLinha.insertCell(2).textContent = Endereco.bairro;
    novaLinha.insertCell(3).textContent = Endereco.rua;

}

function configurarEventos() {
    const inputCep = document.getElementById("input_cep");
    inputCep.addEventListener("focusout", buscarCep);

    const botaoSalvar = document.getElementById("salvar_endereco");
    botaoSalvar.addEventListener("click", salvarCep);
}

window.addEventListener("load", configurarEventos);