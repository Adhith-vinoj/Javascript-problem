// Check the given number is positive, negative or zero.

function positiveNum(num){

   if( num > 0 ){
    return "positive";
   }else if( num < 0 ){
    return "negative";
   }else {
      return "zero";
   }
   
}

console.log(positiveNum(10));

let testValue = ()=>{
   let input = [20,10,0];
   let output = ["positive", "negative","zero"];

   for(let i = 0; i <input.length;i++){
      let result = positiveNum(input[i]);
      if(result === output[i]){
         console.log( `test ${i+1} passed`);
      }else{
         console.log(`test ${i+1} failed`);
      }
   }
}

testValue();

