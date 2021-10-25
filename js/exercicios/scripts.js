const array = [{name: "luiz", age: 27},{name: "ana" , age: 25}]

const Countppl = array.length
console.log(Countppl)

for (let property in array){
    // console.log(property)
    console.log(array[property])
}

// function namesOfppl(){
//     let allNames = []
//     let allAges = []
//     for(let ppl of array){
//         if(allNames.indexOf(ppl.name) == -1){
//         allNames.push(ppl.name)
//         }
//         if(allAges.indexOf(ppl.age) == -1){
//             allAges.push(ppl.age)
//         }
//     }
//     console.log(allNames,allAges)
// }
// namesOfppl()




// function ageOfppl(){
//     let allAges = []
//     for(let ppl of array){
//         if(allAges.indexOf(ppl.age) == -1){
//             allAges.push(ppl.age)
//         }
//     }
//     console.log(allAges)
// }
// ageOfppl()

// let person = {
//     name: 'jhon',
//     age: 30,
//     weight: 88.6
// }
// for (let property in person){
//     console.log(property)
//     console.log(person[property])
// }

const teste = [
    {
        sexo: "masculino",
        pessoas : [
            {
                nome: "John",
                idade: 32
            },
            {
                nome: "Joaozinho",
                idade: 22
            },
            {
                nome: "Pedrão",
                idade: 67
            },
            {
                nome: "Klebão",
                idade: 67
            }
        ]
    },

    {
        sexo: "feminino",
        pessoas: [
            {
                nome: "Ana",
                idade: 23
            },
            {
                nome: "Joana",
                idade: 34
            },
            {
                nome: "Fabiana",
                idade: 42
            }
        ]
    },

]

const asd = teste.length
console.log(asd)

for(let sexo of teste){
    console.log("Sexo: ", sexo.sexo, sexo.pessoas.length)
}



function totalNames (){
    const names = []
    for (let total of teste){
        for (let nome of total.pessoas){
            if (names.indexOf(nome.nome) == -1)
            names.push(nome.nome) 
        }
            
    }
   console.log(names)     
}
totalNames()