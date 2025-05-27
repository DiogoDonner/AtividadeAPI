function buscarCep() {
    const inputCep = document.getElementById("input_cep");
    const valorCep = inputCep.value;
    console.log("buscando cep " + valorCep);
    fetch("https://brasilapi.com.br/api/cep/v2/" + valorCep)
        .then((resposta) => {
            return resposta.json();
        })
        .then((json) => {
            console.log("O estado é " + json.state);
            console.log("A cidade é " + json.city);
            console.log("O bairro é " + json.neighborhood);
            console.log("A rua é " + json.street);
        });

    if (!inputCep || !valorCep) {
        alert("Por Favor Insira um CEP")
    }
}

function ExibirDados() {

    const tabela = document.getElementById("tabela_cep").querySelector("tbody");


}

function configurarEventos() {
    const inputCep = document.getElementById("input_cep");
    inputCep.addEventListener("focusout", buscarCep);
    console.log(transformedData);
}

window.addEventListener("load", configurarEventos);