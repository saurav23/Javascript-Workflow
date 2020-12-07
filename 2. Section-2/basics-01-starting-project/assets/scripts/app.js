function getUserInput(){
    return parseInt(userInput.value) ;
}

function createAndWriteOutput(operator, resultBeforeCalculation, calculationNumber){
    const calcDescription = `${resultBeforeCalculation} ${operator} ${calculationNumber}`;
    outputResult(currentResult,calcDescription);
}

function add(){
    const enteredNumber = getUserInput() ;
    const initialResult = currentResult ;
    currentResult = currentResult + enteredNumber ;
    createAndWriteOutput('+', initialResult, enteredNumber) ;
}

function subtract(){
    const enteredNumber = getUserInput() ;
    const initialResult = currentResult ;
    currentResult = currentResult - enteredNumber ;
    createAndWriteOutput('-', initialResult, enteredNumber) ;
}

function multiply(){
    const enteredNumber = getUserInput() ;
    const initialResult = currentResult ;
    currentResult = currentResult * enteredNumber ;
    createAndWriteOutput('*', initialResult, enteredNumber)
}

function divide(){
    const enteredNumber = getUserInput() ;
    const initialResult = currentResult ;
    currentResult = currentResult / enteredNumber ;
    createAndWriteOutput('/', initialResult, enteredNumber) ;
}

// ----------------------------------------------------------------------------------------------
const defaultResult = 0 ;
let currentResult = defaultResult ;

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);