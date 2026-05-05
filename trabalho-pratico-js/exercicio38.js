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
Descritivo: Dada uma frase, conte quantas palavras ela possui 
(use `split`).
**********************************************************************/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite uma frase: ", function(frase) {

    const palavras = frase.split(" ");
    const quantidadePalavras = palavras.length;

    console.log("Quantidade de palavras:", quantidadePalavras);

    rl.close();
});

//******************************* COMENTÁRIO ******************************************************************************* */
// Este programa solicita ao usuário que digite uma frase, separa o texto em palavras utilizando o método split() 
// com base nos espaços e calcula a quantidade de palavras por meio do tamanho do array resultante, exibindo o total
// no console e encerrando a execução.
//************************************************************************************************************************** */
