// check the given number is odd or even


let oddEven = (num) =>{
    

    if(num % 2  === 0){
        return "given number is even"
    }else{
        return "given number is odd"
    }
}

console.log(oddEven(2));

let testCase = () =>{

    let input = [0, 1, 3,];
    let output = [
        "given number is even",
        "given number is odd",
        "given number is even"
    ];
    
    for(let i = 0; i < input.length; i++){
        let number = oddEven(input[i]);
        if(number === output[i]){
            console.log(`test ${i+1} passed`)
        }else{
            console.log(`test ${i+1}failed`) 
        }
    }
};
testCase();


