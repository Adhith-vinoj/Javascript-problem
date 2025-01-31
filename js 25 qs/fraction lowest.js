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
console.log