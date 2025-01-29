let primeNum = (num)=>{
    for(i = 2; i < num; i++){
        if( num % i  === 0 ){

            return "the number is prime"
        }
        else{
            return "the number is not prime"
        }
    }

}
console.log(primeNum(6));



