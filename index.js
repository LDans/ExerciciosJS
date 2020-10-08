let media;
let alunoPassou;

media = 6;

if (media >= 8){
    alunoPassou = true;
    console.log("O aluno foi aprovado");
} else {
    alunoPassou = false;
    console.log("O aluno foi reprovado");
}


// A) O tipo da constante `typeNumber` é number.
//R - Não, o tipo é string pois o número foi colocado entre aspas
const typeNumber = "10";
console.log( typeof(typeNumber) );

// B) O valor da constante `y` é 149.
//R - Errado. Como um dos valores foi escrito como uma string (entre aspas), o JS vai considerar tudo como string
const y = 147 + "2";
console.log( typeof(y) )


// C) O tipo da constante `x` é number.
//R - Errado. Como existe uma comparação de valores por meio do sinal >, o resultado será o valor-verdade dessa comparação (verdadeiro ou falso), ou seja, uma boolean
const x = 13 > 20;
console.log( typeof(x) )


// D) O valor da constante `s` é "Estartando Devs".
//R - correto
const s = "Estartando " + "Devs";