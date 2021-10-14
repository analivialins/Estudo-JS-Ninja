// (function(){})()

// var five = Number('5');
// console.log( five + ' é número?', typeof five === 'number' );

// var concat = String(10 + 10);
// console.log( '"' + concat + '" é uma string? E é igual a "1010"?', typeof concat === 'string' );

var operation = {
    '+' : function(num1,num2){
            return num1+num2
        },
    '-' : function(num1,num2){
            return num1-num2
        },
    '*' : function(num1,num2){
            return num1*num2
        },
    '/' : function(num1,num2){
            return num1/num2
        },
    '%' : function(num1,num2){
            return num1%num2
        },
}

function isOperatorValid(operator){
    return !!operation[operator];
}

function calculator(operator){
    if (!isOperatorValid(operator)){
        return false;
    }
    return function(num1,num2){
        if (typeof num1 !== 'number' && typeof num2 !== 'number'){
             return false;
        } 

        return operation[operator](num1,num2);
    }
}

function showOperationMessage(num1, operator, num2){
    return 'A operação ' + num1 + operator + num2 + ' =';
}

function showErrorMessage(operator){
    return 'Operação ' + operator + ' não permitida!';
}

var number1 = 0
var number2 = 0
var operationSignalSum = '+'
var operationSignalSub = '-'
var operationSignalMul = '*'
var operationSignalDiv = '/'
var operationSignalMod = '%'

var sum = calculator(operationSignalSum)

if ( sum ) {
    number1 = 10;
    number2 = 12;
    console.log(showOperationMessage(number1, operationSignalSum, number2), sum(number1,number2));
} 
else{
    console.log(showErrorMessage(operationSignalSum));
}

var subtraction = calculator(operationSignalSub)

if ( subtraction ) {
    number1 = 10;
    number2 = 12;
    console.log(showOperationMessage(number1, operationSignalSub, number2), subtraction(number1,number2));
} 
else{
    console.log(showErrorMessage(operationSignalSub));
}

var multiplication = calculator(operationSignalMul)

if ( multiplication ) {
    number1 = 10;
    number2 = 12;
    console.log(showOperationMessage(number1, operationSignalMul, number2), multiplication(number1,number2));
} 
else{
    console.log(showErrorMessage(operationSignalMul));
}

var division = calculator(operationSignalDiv)

if ( division ) {
    number1 = 27;
    number2 = 15;
    console.log(showOperationMessage(number1, operationSignalDiv, number2), division(number1,number2));
} 
else{
    console.log(showErrorMessage(operationSignalDiv));
}

var mod = calculator(operationSignalMod)

if ( mod ) {
    number1 = 125;
    number2 = 52;
    console.log(showOperationMessage(number1, operationSignalMod, number2), mod(number1,number2));
} 
else{
    console.log(showErrorMessage(operationSignalMod));
}
