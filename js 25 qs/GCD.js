let greatestNumber = (a ,b)=>{
    while (b !== 0) {
        let gcd = b;
        b = a % b;
        a = gcd;
        }
        return a;
}

console.log(greatestNumber( 24, 36));