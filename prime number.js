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

let testValue = () =>{
    let input = [6, 7, 8];
    let output = [
        "the number is not prime",
        "the number is prime",
        "the number is not prime"
    ];
 
    for(let i = 0; i < input.length ;i++){
       let result = primeNum(input[i]);
       if(result === output[i]){
          console.log( `test ${i+1} passed`);
       }else{
          console.log(`test ${i+1} failed`);
       }
    }
 }
 
testValue(); 
 