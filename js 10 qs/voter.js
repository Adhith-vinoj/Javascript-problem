// check the given age is eligible for votting

function age(num){
   if(num > 18 || num == 18){
      return "eligible for votting"
   }else if(num < 18){
    return "not eligible for votting"
   }

   
}

console.log(age(18));




let testCase = () =>{

   let input = [
       18,
       20,
       16
   ];
   let output = [
      "eligible for votting",
      "eligible for votting",
      "not eligible for votting"
      
   ];
   
   for(let i = 0; i < input.length; i++){
       let number = age(input[i]);
       if(number === output[i]){
           console.log(`test ${i+1} passed`)
       }else{
           console.log(`test ${i+1}failed`)
       }
   }
};
testCase();



