// Contar elementos de um array
console.log(['a', 'b', 'c'].length)

console.log(
  [
    'a',
    { type: 'array' },
    function () {
      return 'alo'
    }
  ].length
  //Posso dar type no [1] pra ver o tipo do objeto, () no [2] pra exucutar a função.
)
