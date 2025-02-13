let fraction = (a , b)=>{
   while (b !== 0) {
    let frac = b;
    b = a % b;
    a = frac;
   } 

   return a;
}

let simpleFraction=(numer , denom)=>{
    let value =fraction(numer , denom);
    numer /= value;
    denom /= value;

    return { numer, denom };

}

console.log(simpleFraction( 8, 12));



let fractionTest = () => {
    let input = [
        [8, 12],
        [7 ,11],
        [15, 24]
    ];

    let output = [
        {numer: 2, denom: 3},
        {number: 7, denom: 11},
        {number: 5, denom: 7}
        
    ];

    for(let i = 0; i < input.length; i++){
        let number = simpleFraction(input[i][0], input[i][1]);

        if(number.toString() === output[i].toString()){
            console.log(`test ${i+1} passed`)
        }else{
            console.log(`test ${i+1} failed`)
        }
    }
};
fractionTest();

