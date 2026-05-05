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
Descritivo: Use `.forEach()` com Arrow Function para imprimir cada item 
de um array.
**********************************************************************/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite valores separados por espaço: ", function(valores) {

    const array = valores.split(" ");

    array.forEach(item => {
        console.log(item);
    });

    rl.close();
});

//******************************* COMENTÁRIO ******************************************************************************* */
// Este programa solicita ao usuário que digite uma sequência de valores separados por espaço, transforma a entrada 
// em um array utilizando o método split() e percorre cada elemento com forEach, exibindo-os individualmente no console 
// antes de encerrar a execução.
//************************************************************************************************************************** */
