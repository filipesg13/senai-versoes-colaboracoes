// A Empresa Savinis, focada no desenvolvimento de software de alta perfomance, contratou você para
// realizar a programação de um sistema de cadastro de peças, que deverá atender os seguintes requisitor:
// Se a peça possuir um peso superior a 100 gramas, pode cadastrar.
// Da da a capacidade de cada caixa, caso a lista de peças seja superior a 10, imprima uma mensagem informando 
// ter capacidade suficiente.
// caso a peça tenha um nome com quantidade inferior a 3 caracteres, informe uma mensagem de erro.

const entrada = require("readline-sync");

console.log("Software de Cadastro de Pecas");

let listaPecas = parseInt (entrada.question("Qual a quantidade de pecas a serem cadastradas? "));

if (listaPecas < 10) {
    console.log("Ha espaco suficiente para o cadastro!");

    let pesoPeca = parseInt (entrada.question("Qual o peso da peca? "));

    if (pesoPeca > 100){
        console.log("A peça possui peso suficiente para o cadastro!");
        
        let nomePeca = entrada.question("Informe o nome da peca? ");   
        
        if (nomePeca.length>3) {

            console.log("Cadastro efetuado com sucesso!");
            
        } else{
            console.log("O nome da peça, não e um nome valido.");
            console.log("Produto não cadastrado");
            console.log("Fim do Programa!");
        }}
    else {

        console.log("A peça não possui o peso minimo para cadastro!");
        console.log("Fim do programa");     
        
       
    }}

else {
    
    console.log("A lista ja esta cheia!");
    log.console("Fim do programa");
} 

