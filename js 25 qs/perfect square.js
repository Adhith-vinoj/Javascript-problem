// write a program to check  if the given number is perfect square or not

let squareRoot = (num) =>{
    
    let value = Math.sqrt(num);
    return value;
}

console.log(squareRoot(25));


let testCase = ()=>{
    let input = [
        25,
        16,
        0,
        
    ];

    let output = [
       5,
       4,
       3 
    ];

    for(let i = 0; i < input.length; i++){
        let result = squareRoot(input[i]);
        if(result === output[i]){
            console.log(`test ${i+1}passed`);
        }else{
            console.log(`test ${i+1}failed`);
        }
    }
};

testCase();



