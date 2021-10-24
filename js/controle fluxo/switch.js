let expression = 'ac'
switch (expression) {
    case 'a':
        //codigo
        break //opcional, senão tiver ele continua nas proximas.
    case 'b':
        //codigo b
        break
    default:
       // console.log('default')
        break
    }

    function calculate(number1, operator, number2){
        let result
    
        switch  (operator) {
            case '+':
                result = number1 + number2
                break
            case '-':
                result = number1 - number2
                break
            case '*':
                result = number1 * number2
                break
            case '/':
                result = number1 / number2
                break    
            default:
                console.log('indefinido')
                break;
        }
        return result
    }

    console.log(calculate(4, '*', 5))