let currentInput = ''
let operator = ''
let firstValue = ''

function appendNumber(num){
    currentInput = currentInput + num
    document.getElementById('display').value = currentInput
    // console.log(currentInput);
}

function operatorSymbol(op){
  if(currentInput === "")return;  
    firstValue = currentInput
operator = op;
currentInput =""




}
function calculate(){
    if(firstValue===""||currentInput===""||operator==="")return
let result ;
let num1 = parseFloat(firstValue);
let num2 = parseFloat(currentInput);
switch (operator){
    case "+":
        result = num1+num2;
        break;
    case "-":
        result = num1-num2;
        break;
    case "*":
        result = num1*num2;
        break;
    case "/":
        result = num1/num2;
        break;
    default:
        return;
}
document.getElementById('display').value = result;
currentInput=result.toString();
firstValue="";
operator="";






}
function clearDisplay(){
    currentInput ="";
    operator=""
    firstValue=""
    document.getElementById('display').value = "0"
}
