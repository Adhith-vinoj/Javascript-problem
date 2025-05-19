// write a havascript function that calculates the sum of two numbers

let  sumOftwo =(num, val)=>{
   let result = num += val;
   return result;

}
console.log(sumOftwo(10, 10));


let testCase = () =>{

   let input = [
       [1,  2,],
       [10, 15],
       [9, 11],
   ];
   let output = [
      3,
      25,
      20
   ];
   
   for(let i = 0; i < input.length; i++){
       let number = sumOftwo(input[i][0], input[i][1]);
       if(number === output[i]){
           console.log(`test ${i+1} passed`)
       }else{
           console.log(`test ${i+1}failed`)
       }
   }
};
testCase();




