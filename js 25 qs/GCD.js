let greatestNumber = (a ,b)=>{
    while (b !== 0) {
        let gcd = b;
        b = a % b;
        a = gcd;
        }
        return a;
}

console.log(greatestNumber( 24, 36));


let greatestNumberTest = ()=> {
    let input = [
        [24, 36],
        [10, 15],
        [7, 13]
    ];

    let output = [
        12,
        5,
        3
    ];

    for(let i = 0; i < input.length; i++){
        let number = greatestNumber(input[i][0], input[i][1]);
        if(number === output[i]){
            console.log(`test ${i+1} passed`)
        }else{
            console.log(`test ${i+1} failed`)
        }
    }

};

greatestNumberTest()