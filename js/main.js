//declara a variavel titulo que recebe o titulo do formulario
var titulo = 'Formulário Cadastro';

//define ao elemento com id titulo no html com o valor declarado na variavel titulo
document.getElementById('titulo').innerHTML = titulo;


//captura os dados do form
var form = document.getElementById('frmCad');

var dados = {
    nome: undefined,
    telefone: undefined,
    email: undefined
};

function salvar() {
    dados.nome = form.nome.value;
    dados.telefone = form.telefone.value;
    dados.email = form.email.value;
    //a variavel dados e quem informa ao banco os valores a seres salvos
    console.log(dados);
}

function limpar() {
    dados.nome = undefined;
    dados.telefone = undefined;
    dados.email = undefined;
}

//o JS fica escutando se o evento submit vai ser acionado
//caso seja acionado ele executa a funcao salvar
document.addEventListener('submit', function(event){
    event.preventDefault();
    salvar();
})