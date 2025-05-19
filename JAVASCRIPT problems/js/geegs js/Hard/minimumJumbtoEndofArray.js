// function minJumps(arr){
//     let n=arr.length

//     if(n===1)return 0
//     if(arr[0]===0)return 0


//     let maxReach=arr[0]
//     let steps=arr[0]
//     let jumps=1


//     for(let i=0;i<n;i++){
//         if(i===n-1)return jumps


//         maxReach=Math.max(maxReach,i+arr[i])
//         steps--


//         if(steps===0){
//             jumps++
//             if(i>=maxReach) return -1
//             steps=maxReach-i
//         }
//     }
//     return -1
// }
// console.log(minJumps([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9])); // Output: 3
// console.log(minJumps([1, 1, 1, 1, 1])); // Output: 4
// console.log(minJumps([1, 0, 3, 6, 9]))




///][]]]]]

