/*
    
Crie uma função que receba uma string em celsius ou fahrenheit
e faça a transformação de uma unidade para outra 
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32
*/




function convertTemperature(temperature){
    let converted = 0
   temperature = temperature.toUpperCase()
       if (temperature.includes('C')){
           temperature = temperature.replace('C','');
           temperature = Number(temperature)
           converted = temperature * 9 / 5 + 32 + "F"
           console.log('A temperatura é: ', converted)
           return converted
           
       }
       else if (temperature.includes('F')){
           temperature = temperature.replace('F','');
           temperature = Number(temperature)
           converted = (temperature - 32) * 5 / 9 + "C"
           console.log('A temperatura é: ', converted)
           return converted
           
       }
       else
           console.log('não é uma temperatura valida.')
   }
   
convertTemperature('50C')
   


//////////////////////////////

   
   function transformDegree(degree){
       const celciusExists = degree.toUpperCase().includes('C')
       const fahrenheitExists = degree.toUpperCase().includes('F')

       //fluxo de erro
       if(!celciusExists && !fahrenheitExists){
           throw new Error("Grau não identificado")
       }
       
       // fluxo ideal, F -> C
       let updatedDegree = Number(degree.toUpperCase().replace("F",''));
       let formula = fahrenheit => (fahrenheit -32) * 5/9
       let degreeSign = 'C'

       //fluxo alternativo C ->
       if(celciusExists){
           updatedDegree = Number(degree.toUpperCase().replace("C",''));
           formula = celsius => celsius * 9/5 + 32
           degreeSign = 'F'
       }
       
       
       return formula(updatedDegree) + degreeSign
   }

   try {
       console.log(transformDegree('50F'))
       console.log(transformDegree('50C'))

   }
   catch (error){
       console.log(error.message)
   }

   //tentando com regEx


  