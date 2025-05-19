//Given an array arr[] of size n, the task is to find all the Leaders in the array. An element is a Leader if it is greater than or equal to all the elements to its right side.

//Note: The rightmost element is always a leader.



function leader(arr){
    let n=arr.length
    let array=[]

    for(let i=0;i<n;i++){
        if(arr[i]>arr[i+1]){
            array.push(arr[i])
        }
    }
    return array
}


let arr=[16, 17, 4, 3, 5, 2]
console.log(leader(arr))






// function leader(arr){
//     let n=arr.length
//     let leader=[]


//     for(let i=0;i<n;i++){
//         let isLeader=true


//         for(let j=i+1;j<n;j++){
//             if(arr[i]<=arr[j]){
//                 isLeader=false
//                 break;
//             }
//         }
//         if(isLeader){
//             leader.push(arr[i])
//         }
//     }
//     return leader
// }


// let arr = [16, 17, 4, 3, 5, 2];
// console.log(leader(arr)); 


