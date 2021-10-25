/* ### Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima   - A
* entre 80-89       - B
* entre 70-79       - C
* entre 60-69       - D
* menor que 60      - F

*/

//Usando IF

let nota1 = 50
let nota2 = 60
let nota3 = 70
let media = (nota1 + nota2 + nota3) / 3

    if(media >= 90){
        console.log('Nota A')
    }
    else if(media >= 80 && media <= 89){
        console.log('Nota B')
    }
    else if(media >= 70 && media <= 79){
        console.log('Nota C')
    }
    else if(media >= 60 && media <= 69){
        console.log('Nota D')
    }
    else{
        console.log('Nota F')
    }

// Usando Function /switch

function mediaNota (nota1, nota2, nota3){
    let result
    let media = (nota1 + nota2 + nota3) / 3

    switch(true){
        case (media >= 90) :
            console.log("Media: ", media, " nota A");
            break;
        case (media >= 80) :
            console.log("Media: ", media, "nota B");
            break;
        case (media >= 70) :
            console.log("Media: ", media, "nota C");
            break;
        case (media >= 60) :
            console.log("Media: ", media, "nota D");
            break;
        default:
            console.log("Media: ", media, "Nota F");
            break;
    }
    return result
}

mediaNota(100,70,100)




// Outro modo da resposta

let score = 90
let scoreA = score >= 90 && score <= 100
let scoreB = score >= 80 && score <= 89
let scoreC = score >= 70 && score <= 79
let scoreD = score >= 60 && score <= 69
let scoreF = score < 60 && score <= 0

let scoreFinal;

if (scoreA){
    scoreFinal = "A"
}
else if (scoreB) {
    scoreFinal = "B"
}
else if (scoreC) {
    scoreFinal = "C"
}
else if (scoreD) {
    scoreFinal = "D"
}
else if (scoreF) {
    scoreFinal = "F"
}
else{
    scoreFinal = "nota inválida"
}
console.log(scoreFinal)

//Outro modo em função

function getScore(score){
let scoreA = score >= 90 && score <= 100
let scoreB = score >= 80 && score <= 89
let scoreC = score >= 70 && score <= 79
let scoreD = score >= 60 && score <= 69
let scoreF = score < 60 && score <= 0

let scoreFinal;

if (scoreA){
    scoreFinal = "A"
}
else if (scoreB) {
    scoreFinal = "B"
}
else if (scoreC) {
    scoreFinal = "C"
}
else if (scoreD) {
    scoreFinal = "D"
}
else if (scoreF) {
    scoreFinal = "F"
}
else{
    scoreFinal = "nota inválida"
}
return scoreFinal
}
console.log(getScore(100))
console.log(getScore(40))
console.log(getScore(60))
console.log(getScore(-2))