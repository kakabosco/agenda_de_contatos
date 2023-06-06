const form = document.getElementById("form-contato");
const contatos = [];
let linhas = "";

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const inputNomeContato = document.getElementById("nome-contato");
    const inputTelefoneContato = document.getElementById("telefone-contato");

    if (contatoExiste(inputNomeContato.value)) {
        exibirErro(`O contato "${inputNomeContato.value}" já existe.`);
    } else {
        esconderErro();
        adicionarContato(inputNomeContato.value, inputTelefoneContato.value);
        atualizaTabela();
    }

    limparCampos(inputNomeContato, inputTelefoneContato);
});

function contatoExiste(nome) {
    return contatos.find((contato) => contato.nome === nome);
}

function exibirErro(mensagem) {
    const mensagemErro = document.getElementById("mensagem-erro");
    mensagemErro.style.display = "block";
    mensagemErro.textContent = mensagem;
}

function esconderErro() {
    const mensagemErro = document.getElementById("mensagem-erro");
    mensagemErro.style.display = "none";
    mensagemErro.textContent = "";
}

function adicionarContato(nome, telefone) {
    const contato = {
        nome: nome,
        telefone: telefone,
    };
    contatos.push(contato);

    let linha = "<tr>";
    linha += `<td>${contato.nome}</td>`;
    linha += `<td>${contato.telefone}</td>`;
    linha += `</tr>`;

    linhas += linha;
}

function limparCampos(inputNomeContato, inputTelefoneContato) {
    inputNomeContato.value = "";
    inputTelefoneContato.value = "";
}

function atualizaTabela() {
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
}
