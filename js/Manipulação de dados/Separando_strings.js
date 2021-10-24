// Separando um texto que contem espaços, em um no array onde cada texto é uma posiçõa do array, Depois disso, transforme o array em um texto e onde eram espaços, coloque _

let phrase = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
let myArray = phrase.split(' '',')
console.log(myArray)
console.log(myArray.length)
let phraseWithUnderscore = myArray.join('_')
console.log(phraseWithUnderscore)
