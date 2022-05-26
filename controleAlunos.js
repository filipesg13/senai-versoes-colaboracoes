const entrada = require("readline-sync");

let num = parseInt (entrada.question("Digite o numero de alunos presentes? "))


let res = num % 2;
if (num == 0){
    console.log("O numero de alunos e zero: " + num);
}else{
if (res == 0 ) {
    console.log("O numero de alunos é par : " + num);
} else {
    console.log("O numero de alunos é impar: " + num);
}
}
