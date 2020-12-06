function add(num1, num2){
    const result = num1 + num2 ;
    // alert ('The result is ' + result ) ;
    return result ;
}
// ----------------------------------------------------------------------------------------------
const defaultResult = 0 ;
let currentResult = defaultResult ;
// currentResult = currentResult + 20 ;

currentResult = add(2,6);


let calculationDescription = '( ' + defaultResult + ' + 10 )' ; // string concatenation

outputResult(currentResult, calculationDescription);