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
Descritivo: Crie um loop que pare (`break`) quando encontrar o número 7 
em uma contagem de 1 a 10.
**********************************************************************/

for (let i = 1; i <= 10; i++) {
    console.log(i, "...");

    if (i === 7) {
        console.log("Número 7 encontrado na contagem! Contagem concluída");
        break;
    }
}


//******************************* COMENTÁRIO ******************************************************************************* */
// Este programa realiza uma contagem de 1 a 10 utilizando um laço for, exibindo cada número no console e interrompendo a 
// execução ao encontrar o número 7, momento em que exibe uma mensagem indicando que o valor foi encontrado e finaliza a 
// contagem com o uso do break.
//************************************************************************************************************************** */
