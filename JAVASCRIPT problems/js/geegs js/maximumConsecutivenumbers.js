//Given an array arr[] consisting of only 0’s and 1’s, the task is to find the count of a maximum number of consecutive 1’s or 0’s present in the array.



// function maxConsecutiveCount(arr){
//     let maxCount=0,count=1

//     for(let i=1;i<arr.length;i++){
//         if(arr[i]===arr[i-1]){
//             count++
//         }else{
//             maxCount=Math.max(maxCount,count)
//             count =1
//         }
//     }
//     return Math.max(maxCount,count)
// }


// let arr=[1,1,1,0,0,0,1,1,0,0,1,1,1,1]
// console.log(maxConsecutiveCount(arr))



// function maxrepeateNumber(arr){
//     let maxCount =0,count=0,mostRepeated=arr[0]
    

//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===arr[i-1]){
//             count++
//         }
//         if(count>maxCount){
//             maxCount=count
//             mostRepeated=arr[i]
//         }
//     }
//     return `${mostRepeated}is repeating ${count} times`
// }
// let arr=[1,2,2,3,3,3,3,3,5,5,2,1,5,3]
// console.log(maxrepeateNumber(arr))








function d(arr){
    let maxCount=0,count=1,mostRepeated=0

    for(let i=1;i<arr.length;i++){
        if(arr[i]===arr[i+1]){
            count++
        }else{
            count=1
        }
        if(count>maxCount){
            maxCount=count
            mostRepeated=arr[i]

        }
    }
    return `${mostRepeated} is repeating ${maxCount} times`
}


let arr=[1,2,2,3,3,3,3,3,5,5,2,1,3,5,3]
console.log(d(arr))
