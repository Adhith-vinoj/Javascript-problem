let least = (a, b)=>{
    while (b !== 0){
        let lcm = b;
        b = a % b;
        a = lcm;
    }

    return a;
}

let leastMultiple = (a , b)=>{
    return Math.abs(a * b) / least(a , b);
}

console.log(leastMultiple(12 ,18));

let lcmTest = ()=>{
    let input = [
        [12, 18],
        [5, 7],
        [16, 20]
    ];

    let output = [
        36,
        35,
        60
    ];

    for(let i = 0; i < input.length; i++){
        let result = leastMultiple(input[i][0], input[i][1]);
        if(result === output[i]){
            console.log(`test ${i+1} passed`)
        }else{
            console.log(`test${i+1} failed`)
        }
        }
};

lcmTest();

