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
Data: 01 de Abril de 2026
Descritivo: Crie um programa que verifique se um número é par ou ímpar. 
**********************************************************************/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número: ", function(numero) {

    numero = Number(numero);

    if (numero % 2 == 0) {
        console.log("O número é PAR");
    } else {
        console.log("O número é ÍMPAR");
    }

rl.close();

});


//******************************* COMENTÁRIO ******************************************************************************* */
// Este programa solicita ao usuário que digite um número pelo terminal, converte o valor informado de texto para número e 
// verifica se ele é par ou ímpar utilizando o operador de resto da divisão. Em seguida, exibe o resultado correspondente na 
// tela e encerra a interface de leitura.
//************************************************************************************************************************** */
