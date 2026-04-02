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
Descritivo: Use um `do...while` para garantir que uma variável seja 
incrementada pelo menos uma vez antes da verificação.
**********************************************************************/

let numero = 0;

do {
    numero++;
    console.log("Vezes que o Flamengo foi campeão da libertadores:", numero);

} while (numero < 4);
