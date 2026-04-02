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
Descritivo: Escreva uma função que receba um número e retorne `true` se 
for primo, `false` caso contrário
**********************************************************************/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function verificarNumeroPrimo(numero) {

    if (numero <= 1) {
        return false;
    }

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
        return false;
        }
    }

    return true;
}

rl.question("Informe um número qualquer: ", function(numeroDigitado) {

    numeroDigitado = Number(numeroDigitado);

    if (verificarNumeroPrimo(numeroDigitado)) {
        console.log("O número", numeroDigitado, "É primo!");
    } else {
        console.log("O número", numeroDigitado, "NÃO é primo.");
    }

    rl.close();
});
