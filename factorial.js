// calculate the factorial of a given number


let factorial = (n)=>{
    let result = 1;
    for(i = 1; i <= n; i++){
        result *= i;
    }
    return result;
}
console.log(factorial(7));



let testCase = () =>{
    let input = [ 1, 2, 3,];
    let output = [
        1,
        2,
        6
    ];

    for(let i = 0; i < input.length;i++){
        let number = factorial(input[i]);
        if(number === output[i]){
           console.log(`test ${i+1} passed`)
        }else{
            crossOriginIsolated.log(`test${i+1}failed`)
        }
    }
}
testCase();