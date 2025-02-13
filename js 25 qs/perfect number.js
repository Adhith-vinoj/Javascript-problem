let perfectNumber = (num)=>{
    let sum = 0;
    for(let i = 1; i <= num / 2; i++) {

        if(num % i === 0){
            sum += i;
        }

    }

    return sum === num ?  `${num} is a perfect number.` : `${num} is not perfect number`;
}

console.log(perfectNumber(6));



let testCase = ()=>{
    let input = [
        6,
        28,
        10,
        
    ];

    let output = [
       "6 is a perfect number.",
       "28 is a perfect number.",
       "10 is not a perfect number." 
    ];

    for(let i = 0; i < input.length; i++){
        let result = perfectNumber(input[i]);
        if(result === output[i]){
            console.log(`test ${i+1}passed`);
        }else{
            console.log(`test ${i+1}failed`);
        }
    }
};

testCase();



