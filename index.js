function calculator(a,b,operator){
    switch(operator){
        case"+":
        return a+b;
        case"-":
        return a-b;
        case"*":
        return a*b;
       default:
        return "invalid data"
    }
}
console.log(calculator(10,20,"+"))