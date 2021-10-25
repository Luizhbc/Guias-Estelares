/* ### Sistema de gastos familiar

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.

*/


let family = {
    receitas: [5000,1000, 250, 100, 5000, 200],
    despesas: [2000,1200,700,500]
}


function sum(receitasDespesas){
    let total = 0
    for(let value of receitasDespesas){
        total += value
    }
return total
}

function balance(){
    const somaReceita = sum(family.receitas)
    const somaDespesas = sum(family.despesas)
    const saldo = somaReceita - somaDespesas
    console.log(saldo)
}
balance()
