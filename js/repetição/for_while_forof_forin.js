
//for
// break
//continue ; pula a execução
for (let i = 0 ; i <= 10 ; i++){
    if (i === 6) {
        break; //posso parar a qualquer momento
        //continue;
    }
    console.log(i)    
    }

//while
// Usar o While quando não souber quando a aplicação for parar
    
let i = 49586394505
while(i >10){
    console.log(i)
    i /=35
}



//for of
let name = 'Jhon'
let names = ['jhon', 'Ana', 'joãozinho']

for(let char of name){
    console.log(char)

}
//name escopo local nesse caso
for(let name of names){
    console.log(name)

}

//for in

let person = {
    name: 'jhon',
    age: 30,
    weight: 88.6
}

for (let property in person){
    console.log(property)
    console.log(person[property])
}