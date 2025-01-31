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

