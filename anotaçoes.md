Curso de JavaScript

Tipos de variáveis

Var;
Let;
Const.

Tipos de alerta

Alert()       //Abre o alerta somente com a mensagem e o botão de “Ok”.
Confirm()  //Emite um alerta para confirmação com dois botões “Ok” e “Cancel”.
Prompt()    //Emite um alerta para inserção de dados.

Transformar

De String para Number:

Number.parseInt(n);      //Para números inteiros.
Number.parseFloat(n);  //Para números quebrados.
Number(n).                   //Para os dois casos

De Number para String:

String(n); //Para converter o n para String.
n.toString(). //Para inverter o n para String.

	Formatação de String:
		
		var s = “JavaScript”
			
		“Eu estou aprendendo s”      //Sem interpolação;
		“Eu estou aprendendo” + s   //Contatenação;
`Eu estou aprendendo ${s}` //Ultiliza template String ou interpolação de String.

Ex.:

“O aluno” + aluno ”, com” + idade “anos, tirou” + nota  //Contatenação;
“O aluno ${aluno}, com ${idade}anos, tirou ${nota}”   //Interpolação.

var s = “JavaScript”

s.length                //Tamanho da String(em caracteres)
s.toUpperCase()  //Todos os caracteres em maiúsculo.
s.toLowerCase() //Todos os caracteres em minúsculo.
:
Caracteres

“=” => Recebe;
“==” => Igual;
“===” => Mesmo tipo e valor;
“!==” => Diferente;
“+” => Adição ou concatenação;


Demais anotações:

node/js

Cálculo de salário utilizando toLocaleString()
salario = Number(1200.95)
1200.95
comissao = Number(900.87)
900.87
total = salario + comissao
2101.82
 total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
'R$ 2.101,82'

Nota: Um dai organizo(Se for preciso)

