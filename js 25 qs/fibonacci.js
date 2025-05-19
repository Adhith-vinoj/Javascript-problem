// write a program to calculate the fibonacci series of a given number

// let fibonacci = (num)=>{
//     let a = 0;
//     let b = 1;
//     let result = [];

//     for (i = 0; i < num; i++){
//         result.push(a);
//         let next = a + b;
//         a = b;
//         b = next;
//     }

//     return result;
// }

// console.log(fibonacci(10));

// let number =(num)=>{

//   let  a = 0;
//   let  b = 1;
//     let result = [];
      
//     for(i = 0; i < num; i++){
//       result.push(a)
//       let next = a + b;
//       a = b;
//       b = next;

//     }
//     return result;
// }

// console.log(number(5));



// let numbers = (arr) =>{

//   let duplicates = [];
//   for(let i = 0; i < arr.length; i++){
//     for(let j = i + 1; j < arr.length; j++){
//       if(arr[i]===arr[j] && !duplicates.includes(arr[i])){
//         duplicates.push(arr[i])
//       }

//     }
  
//   }

//   return duplicates;


// }

// console.log(numbers([1,2,3,4,5,5,6,2]));










// find largest in the array



let largestNum = (arr)=>{

  let max = arr[0];
  let result=[];

  for(i = 1; i < arr.length; i++){
    if(arr[i] > max){
       max = arr[i];
       result.push(arr[i])
    }
  }
  return result;
}

console.log(largestNum([11,14,4,7,5,6,10]))









// let palindrome = (str) =>{
//   let result = "";
//   for(let i = str.length-1; i >= 0; i--){
//      result += str[i];
//   }
//      if(result === str){
//        return "it is a palindrome"
//      }else{
//        return "it is not plaindrome"
//      }
  
// }

// console.log(palindrome("malayalam"))












// // // testcase

// // let testFib = () => {
// //     let input = [10, 5, 2]
// //     let output = [
// //         [0, 1, 1, 2, 3, 5, 8, 13, 21, 34],
// //         [0, 1, 1, 2, 3], 
// //         [0]                  
      
// //     ];
    
// //     for (let i = 0; i < input.length; i++){
// //         let fibno = fibonacci(input[i]);
// //         if(fibno.toString() === output[i].toString()){
// //             console.log(`test ${i+1} passed`);
// //         } else {
// //             console.log(`test ${i+1} failed`)
// //         }
// //     }
                             
// };
// testFib();





// let duplicates = (arr)=>{

//   let dupli = [];
//   for(i = 0; i < arr.length; i++){
//     for(j= i+1; j <arr.length; j++){
//       if(arr[i] === arr[j] && !dupli.includes(arr[i])){
//         dupli.push(arr[i])

//       }
//     }
//   }

//   return dupli
 
// }

// console.log(duplicates([1,2,3,2,4,5,4]));





// const text = "javascript";

// console.log(text.slice(2,8))

 
function mostRptd(str){
  let counts ={};
  let mostItem = arr[0];
  let maxCount = 0;

  for(let i=0;i<arr.length;i++){
    counts[item] = (counts[item] || 0) + 1;
    if(counts[item] >maxCount){
      maxCount= counts[item];
      mostItem = item;
    }
  }
  return Number(mostItem);
}
console.log(mostReapeated([5,2,3,5,4,4,4]))




// let mostReapeated = (arr) =>{
//   const count= {};
//   let maxCout = 0;

//   let mostReap;

//   for(i = 0; i < arr.length; i++){
//     const values = arr[i];
//     count[values] = (count[values] || 0) + 1;

//     if(count[values] > maxCout){
//       maxCout = count[values];
//       mostReap = values
//     }
//   }
//   return mostReap
// }

// console.log(mostReapeated([5,1,5,2,3,2,3,2,3,3,2]));




  
// let pyramid = (num) =>{ 
//   for(let i = 1; i <= num; i++){
//     let line = "";

//     for(let j =1; j <= num -i; j++){
//       line += " ";
//     }

//     for(let k = 1; k <= 2 * i - 1; k++){
//       line += "*"
//     }
//      console.log(line);
     

//   }


// }

// pyramid(5)



// let pyramid = (num)=>{
//       for(i = 1; i < num; i++){
//         const spaces = " ".repeat(num - i);
//         const star = "*".repeat(2 * i - 1)
//         sum = spaces + star
//         console.log(sum)
//       }

// }

// pyramid(5)




// Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to target.
// Input: nums = [2, 7, 11, 15], target = 9  
// Output: [0, 1]  
// Because nums[0] + nums[1] = 2 + 7 = 9



function integer(num, target){
  let result = [];
  for(i =0; i < num.length; i++){
    for(j = i+1; j< num.length; j++){
      if(num[i] + num[j] === target){
         result.push( num[i] , num[j])
         return result;
         
      }
    }
  }

  
}


console.log(integer([2,3,7,4,5], 6))





// let rotateArray = (arr,k) =>{
//   for(i = 0; i < k; i++){
//     let newEl = arr[arr.length-1]
//     for(j = arr.length-1; j > 0; j--){
//       arr[j] = arr[j-1]
//     }
//     arr[0] = newEl
//   }

//   return arr
// };

// console.log(rotateArray([1,2,3,4,5] , 2))

let array =(arr, k) =>{
  for(i =0; i< k; i++){
    let result = arr[arr.length-1]
    for(j = arr.length-1; j > 0; j--){
      arr[j]= arr[j-1];
    }
    arr[0] = result
  }

  return arr
    
}
console.log(array([1,2,3,4,5] , 2))



// let minMax = (arr)=>{
//    let max = arr[0];
//    for(i = 1; i<arr.length; i++){
//     if(arr[i] > max){
//       max = arr[i]
//     }
//    }

//    return max;
// }

// console.log(minMax([2,3,4,5,6,7,8]))



// myName()
// function myName(){
//   console.log("hello world")
// }


// console.log(a)
// var a = 10;


// function test(){
//   let x =10;
//   if(true){
//     let x =30;
//     console.log(x)
//   }
//   console.log(x)
// }
// test()





// let countDupli = (arr)=>{

//   const count = {};

//   let maxCount = 0;

//   let result;

//   for(i =0; i<arr.length; i++){
//     const values = arr[i];
//     count[values] = (count[values] || 0)+ 1;
//     if(count[values] > maxCount){
//       maxCount = count[values]
//       result = values

//     }
//   }

//   return result;
// }

// console.log(countDupli([5,4,5,4,4,7]))









// let flatten =(arr)=>{

//   let result = [];
//   for(i =0; i < arr.length; i++){
//     let current = arr[i];
//     if(Array.isArray(current)){
//       for(j = 0; j <current.length; j++){
//         result.push(current[j]);
//       }
//     }else{ 
//       result.push(current)
//     }
//   }

//   return result;


// }

// console.log(flatten([1, [2, 3], 4, 5]))




// let flatern = (arr) =>{
 

//   let result = [];

//   for(i =0 ; i < arr.length; i++){
//     let values = arr[i];
//     if(Array.isArray(values)){
//       for(j = 0; j < values.length; j++){
//         result.push(values[j])

//       }
//     }else{
//       result.push(values)
//     }
//   }

//   return result;


// }

//  console.log(flatern([1, [2, 3], [4], 5]))



 




 
 



// let arrayNumber=(arr)=>{
//   let dup = [];
//   for(i =0; i <arr.length; i++){
//    for(j= i+1; j < arr.length; j++){
//     if(arr[i] === arr[j] && !dup.includes(arr[i])){
//       dup.push(arr[i])
 
//     }
//    }
//   }

//   return dup;
// }

// console.log(arrayNumber([1,2,3,4,2,4,5,6,4]))





// let largestNums =(arr, n) =>{
//   let sorted = arr.sort()
//   let dupli =[];
//   for(i =0; i < sorted.length; i++){
//     if(!dupli.includes(sorted[i])){
//       dupli.push(sorted[i])
//     }
//   }

//   return dupli[dupli.length-n];

// }

// console.log(largestNums([2,3,2,4,8,6,7,4,9,6], 4))







