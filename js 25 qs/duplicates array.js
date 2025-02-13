let duplicatesArray = (arr)=>{
     return [...new Set(arr)];
}
console.log(duplicatesArray([1,2,2,3,4,4,5]));


 let duplicateTest = () =>{
     let input = [
          [1, 2, 2, 3, 3, 4, 5,],
          [3 ,3 , 6, 7],
          [1, 1, 5, 6, 8, 9, 9]
     ];

     let output =[
          [1, 2, 3, 4, 5],
          [3, 6, 7],
          [1, 5, 6, 8, ]
     ];

     for(let i = 0; i < input.length; i++){
          let result = duplicatesArray(input[i]);
          if (result.toString() === output[i].toString()){
               console.log(`test ${i+1} passed`)
          }else{
               console.log(`test ${i+1} failed`)
          }
     }
 };
 duplicateTest();