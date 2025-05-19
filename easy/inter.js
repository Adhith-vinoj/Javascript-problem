
// // find the missing number (4)
// let missingNum=(arr, n)=>{
//     let total = 0;
//     for(i = 1; i<=n; i++){
//        total += i;
//     }
//     for(i = 0; i<arr.length; i++){
//      total -= arr[i]
//     }
 
//     return total
 
//  }
 
//  console.log(missingNum([1,2,3,5,], 5))

 

// find the missing the number between the array

// let missingInside =(arr,n)=>{
//     let missing = [];
//     for(let i = 1; i<=n; i++){
//       if(!arr.includes(i)){
//           missing.push(i);     
//       }
//     }
  
//     return missing;
//   }
  
  
//   console.log(missingInside([1,3,5,7,9,11], 11));



  

// count vowels----------------------------------------
// let countVowels = (str)=>{
//     let count = 0;
//     let vowels = "aeiouAEIOU";
//     for(i = 0; i < str.length; i++){
//       if(vowels.includes(str[i])){
//         count++;
//       }
//     }
//     return count;
//   }
  
//   console.log(countVowels("adhith"));
  
  



// let numberBack = (str)=>{
//     const words = str.split(" ");
//     let reversed = [];
//      for(i = words.length-1; i >= 0; i--){
//         reversed.push(words[i])
//         }
//     return reversed.join(" ")

// }


// console.log(numberBack("i love you"))

  


// // find subarrays with given sum///////////
// let numberTarget = (num,target)=>{
//     let result = [];
//     for(i=0; i<num.length; i++){
//         let sum = 0;
//         let temp = [];
//         for(j = i; j <num.length; j++){
//             sum += num[j];
//             temp.push(num[j])
//             if(sum === target){
//                 result.push(temp)
//             }

//         }
//     }
//     return result
// }
 
// console.log(numberTarget([1,2,3,7,], 12))

 



let subArray = (arr, target)=>{
    let result = [];
    for(i = 0; i<arr.length; i++){
        let sum = 0;
        let temp = [];
        for(j = i; j<arr.length; j++){
            sum += arr[j]
            temp.push(arr[j])
            if(sum === target){
                result.push([...temp])
            } 
        }
    }

  return result
}

console.log(subArray([1,2,4,5,3], 12)) 

