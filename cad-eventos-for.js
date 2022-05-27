console.log("");
console.log("");
console.log("******** Cadastro de Eventos ******** ");

const entrada =  require("readline-sync");

var sequence = [1,2];
for ( var c=1 ; c<= sequence.length ; c++ ) {
    
    let data = parseFloat(entrada.question("Informe a data do evento? "));
    if (data > 26) {
        
        let idade = parseFloat(entrada.question("Informe a sua idade? "));
        if (idade >= 18 ) {
            
            let nome = entrada.question("Informe o nome do participante? ");
        } else {
            console.log("Não e permitido o cadastro de partipantes menores de idade!"); 
        } 
    } else {
        console.log("O cadastro não pode ser efetuado, pois a data do evento informado, não e válida.");
    }


}

console.log("******** Lista de participantes no evento :*********");
console.log("");
console.log("");

console.log(nome);