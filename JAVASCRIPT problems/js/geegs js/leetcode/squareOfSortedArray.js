// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].


// function squares(arr){
//     let result=[]
//     let res=0
//     for(let i=0;i<arr.length;i++){
//         res = arr[i]**2
//         result.push(res)
//     }
//     for(let i=0;i<result.length;i++){
//         for(let j=0;j<result.length;j++){
//             if(result[j]>result[j+1]){
//                 let temp=result[j]
//                 result[j]=result[j+1]
//                 result[j+1]=temp
//             }
//         }
//     }

//     return result
// }
// let arr=[-4,-1,0,3,10]
// console.log(squares(arr))



////////////]]]





function squares(arr){
    let result=[]
    let sum=0

    for(let i=0;i<arr.length;i++){
      sum=  arr[i]**2
      result.push(sum)
      
    }    
    for(let i=0;i<result.length;i++){
        for(let j=0;j<result.length;j++){
            if(result[j]>result[j+1]){
                let temp=result[j]
                result[j]=result[j+1]
                result[j+1]=temp
            }
        }
    }
    return result
}

let arr=[5,2,3,6,5]
console.log(squares(arr))


