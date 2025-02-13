// write a program to calculate the fibonacci series of a given number

let fibonacci = (num)=>{
    let a = 0;
    let b = 1;
    let result = [];

    for (i = 0; i < num; i++){
        result.push(a);
        let next = a + b;
        a = b;
        b = next;
    }

    return result;
}

console.log(fibonacci(10));

// testcase

let testFib = () => {
    let input = [10, 5, 2]
    let output = [
        [0, 1, 1, 2, 3, 5, 8, 13, 21, 34],
        [0, 1, 1, 2, 3], 
        [0]                  
      
    ];
    
    for (let i = 0; i < input.length; i++){
        let fibno = fibonacci(input[i]);
        if(fibno.toString() === output[i].toString()){
            console.log(`test ${i+1} passed`);
        } else {
            console.log(`test ${i+1} failed`)
        }
    }
                             
};
testFib();
