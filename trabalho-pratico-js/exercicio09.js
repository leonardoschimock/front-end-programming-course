/*********************************************************************
Curso: Engenharia de Software
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ESOFT3B
Componentes:
25212854-2 - Arthur de Andrade Malvaso
25034198-2 - Carlos Eduardo dos Santos da Silva
25216341-2 - Isadora Tereza Taques Fernandes
25357718-2 - Jean Carlos Siqueira dos Santos
25363487-2 - Leonardo Schimock Silveira
25363611-2 - Thiago de Barros Inácio
Data: 02 de Abril de 2026
Descritivo: Crie um programa que aplique um desconto de 10% se a compra 
for acima de R$ 100,00.
**********************************************************************/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Informe o valor total da sua compra: ", function(valorTotal) {

    valorTotal = Number(valorTotal);

    if (valorTotal >= 100) {
        valorTotal = valorTotal - (valorTotal * 0.10);
        console.log("Você possui um DESCONTO!!");
        console.log("Sua compra ficou no valor de:", valorTotal);
    } else {
        console.log("Você não possui DESCONTO :(");
        console.log("Valor total da compra:", valorTotal);
    }

rl.close();

});

//******************************* COMENTÁRIO ******************************************************************************* */
// Este programa solicita ao usuário o valor total de uma compra, converte o valor informado para número e verifica se ele 
// é maior ou igual a 100 para aplicar um desconto de 10%, exibindo o valor final com ou sem desconto e encerrando a execução.
//************************************************************************************************************************** */
