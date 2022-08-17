alert("Iniciado");

var salario = Number(prompt("Digite seu salário:"));
var desconto = Number(prompt("Digite a comissão do seu salário:"));

var total = salario + desconto;

total.toFixed(2).replace('.', ',')
total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
document.write(`Seu salário total é: ${total}`);

//Não consegui(ainda) fazer o mesmo que no Nodejs