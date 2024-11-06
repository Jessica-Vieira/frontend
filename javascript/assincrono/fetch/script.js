const cep = fetch('https://viacep.com.br/ws/01001000/json/');

cep
    .then(resolucao=>resolucao.json())
    .then(body=>{
    const logradouro = document.querySelector('.ruaNome'); 
    const bairro = document.querySelector('.bairroNome'); 
    logradouro.innerText = body.logradouro;
    bairro.innerText = body.bairro;
});