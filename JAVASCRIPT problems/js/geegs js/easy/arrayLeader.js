//Given an array arr[] of size n, the task is to find all the Leaders in the array. An element is a Leader if it is greater than or equal to all the elements to its right side.



// function leader(arr){
//     let result=[]

//     for(let i=0;i<arr.length;i++){
//         let isLeader=true
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]<=arr[j]){
//                 isLeader=false
//                 break
//             }
//         }
//         if(isLeader){
//             result.push(arr[i])
//         }
//     }
//     return result
// }
// let arr=[16, 17, 4, 3, 5, 2]
// console.log(leader(arr))


///////////////////////////



// function leader(arr){
//     let result=[]

//     for(let i=0;i<arr.length;i++){
//         let isLeader=true

//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]<=arr[j]){
//                 isLeader=false
//                 break
//             }
//         }
//         if(isLeader){
//             result.push(arr[i])
//         }
//     }
//     return result
// }
// let arr=[16, 17, 4, 3, 5, 2]
// console.log(leader(arr))

// const test=()=>{
//     let input=[16, 17, 4, 3, 5, 2]
//     let expected=[ 17, 5, 2 ]
    


//     let result=leader(input)

//     if(JSON.stringify(result)===JSON.stringify(expected)){
//         return `passed`
//     }else{
//         return `failed`
//     }
// }
// console.log(test())






////]///]]]

 



