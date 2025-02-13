// calculate the multiplication table of a given Number.

let multiple = (num,val)=> {
     let multi = num * val;
     return multi;
}

console.log(multiple(3,3));
 

let testCase = ()=>{
     let input = [
          [3, 2],
          [1, 3],
          [3, 2]
     ];

     let output = [
          6,
          3,
          8
     ];

     for(let i = 0; i < input.length; i++){
          let number = multiple(input[i][0], input[i][1])
          if(number === output[i]){
               console.log(`test ${i+1}passed`)
          }else{
               console.log(`test ${i+1} failed`)
          }
     }
     
}
 
testCase();