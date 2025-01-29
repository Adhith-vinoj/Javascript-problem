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
