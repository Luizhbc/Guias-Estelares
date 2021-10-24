//throw

function sayMyname(name = ''){
    if (name === ''){
        throw ('nome é obrigatorio')
    }

    console.log(name)
}


//try... catch

try {
    sayMyname('luiz')
} catch(e){
    console.log(e)
}