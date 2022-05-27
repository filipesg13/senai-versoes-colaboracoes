console.log("");
console.log("");
console.log("******** Cadastro de Eventos ******** ");

const entrada =  require("readline-sync");

cont = 1;
while (cont <=2 ) {
    
    let data = parseFloat(entrada.question("Informe a data do evento? "));
    if (data > 26) {
        
        let idade = parseFloat(entrada.question("Informe a sua idade? "));
        if (idade >= 18 ) {
            
            let part = parsefloat (entrada.question("Informe o nome do participante? "));
        } else {
            console.log("Não e permitido o cadastro de partipantes menores de idade!"); 
        } 
    } else {
        console.log("O cadastro não pode ser efetuado, pois a data do evento informado, não e válida.");
    }

    cont++;   
   
}

console.log("******** Lista de participantes no evento :*********");
console.log("");
console.log("");

console.log(part);