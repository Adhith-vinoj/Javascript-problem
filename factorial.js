// calculate the factorial of a given number


let factorial = (n)=>{
    let result = 1;
    for(i = 1; i <= n; i++){
        result *= i;
    }
    return result;
}
console.log(factorial(7));

