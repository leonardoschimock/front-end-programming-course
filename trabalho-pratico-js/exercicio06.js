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
Descritivo: Receba um número de 1 a 7 e exiba o dia da semana correspo-
ndente (use `switch`).
**********************************************************************/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número de 1 a 7 para verificar o dia da semana: ", function(diaDaSemana){
    diaDaSemana = Number(diaDaSemana);

    switch(diaDaSemana) {
        case 1:
            console.log("Domingo");
            break;
        case 2:
            console.log("Segunda-Feira");
            break;
        case 3:
            console.log("Terça-Feira");
            break;
        case 4:
            console.log("Quarta-Feira");
            break;
        case 5:
            console.log("Quinta-Feira");
            break;
        case 6:
            console.log("Sexta-Feira");
            break;
        case 7:
            console.log("Sábado");
            break
        default:
            console.log("Esse número não é válido");
    }

rl.close();

});

//******************************* COMENTÁRIO ******************************************************************************* */
// Este programa solicita ao usuário um número de 1 a 7, converte o valor informado para número e utiliza a estrutura 
// switch para identificar e exibir o dia da semana correspondente, apresentando uma mensagem de erro caso o valor esteja 
// fora do intervalo válido.
//************************************************************************************************************************** */
