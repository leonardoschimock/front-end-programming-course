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
Descritivo: Use `.map()` para dobrar todos os valores de um array 
numérico.
**********************************************************************/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite números separados por espaço: ", function(arrayNumeros) {

    const numerosInformados = arrayNumeros.split(" ").map(Number);

    const numerosDobrados = numerosInformados.map(numero => numero * 2);

    console.log("Array informado:", numerosInformados);
    console.log("Array dobrado:", numerosDobrados);

    rl.close();
});

//******************************* COMENTÁRIO ******************************************************************************* */
// Este programa solicita ao usuário uma sequência de números separados por espaço, converte os valores informados em 
// um array numérico e utiliza o método .map() para gerar um novo array com todos os elementos dobrados, exibindo tanto 
// o array original quanto o transformado antes de encerrar a execução.
//************************************************************************************************************************** */
