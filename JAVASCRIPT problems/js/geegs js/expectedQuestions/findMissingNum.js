
// let arr=[1,2,3,4,6]
// let num = arr[arr.length-1]
// function sumofrange(num){
//     let sum=0
//     for(let i=0;i<=num;i++){
//         sum+=i
//     }
//     return sum
// }
// let actSum=sumofrange(num)


// function sumofArray(arr){
//     let sum=0
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i]
//     }
//     return actSum-sum
// }

// console.log(sumofArray(arr))







// function finMissingNum(arr){
//     let max=arr[0]
//     let actualsum=0

//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i]
//         }
//         actualsum+=arr[i]
//     }

//     let expectedSum=(max*(max+1))/2


//     return expectedSum-actualsum
// }

// let arr = [1, 2, 3, 4, 6]; 
// console.log(finMissingNum(arr))






function missingNum(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i+1]!==arr[i]+1){
            return arr[i]+1
        }
    }
}
let arr=[1,2,3,4,5,7]


console.log(missingNum(arr))




