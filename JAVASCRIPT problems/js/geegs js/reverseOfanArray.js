//Given an array arr[] and an integer K, the task is to reverse every subarray formed by consecutive K elements.




// function reverseInGroups(arr,k){
//     for(let i=0;i<arr.length;i++){
//         let left=i

//         let right=Math.min(i+k-1,arr.length-1)

//         while(left<right){
//             [arr[left],arr[right]]=[arr[right],arr[left]]
//             left++
//             right--
//         }
//     }
//     return arr
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let K = 3;
// console.log(reverseInGroups(arr, K));
