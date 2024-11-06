const cepCampo = document.getElementById('cep');
const botao = document.getElementById('botao');
const resultadoCep = document.getElementById('resultadoCep')

botao.addEventListener('click', handleClick);

function handleClick(event){
    event.preventDefault();
    const cep = cepCampo.value;
    buscarCep(cep);
}

function buscarCep(cep){
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(res => res.text())
    .then(body=>{
        resultadoCep.innerText = body
    })
}

