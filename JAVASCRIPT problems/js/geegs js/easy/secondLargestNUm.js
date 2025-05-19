


// function secondLargest(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length;j++){
//             if(arr[j]<arr[j+1]){
//                 let temp=arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=temp
//             }
//         }
//     }
//     return arr
// }
// let arr = [10, 20, 4, 45, 99, 99,99,45, 5];
// let sorted=secondLargest(arr); 
// console.log(secondLargest(arr))


// function seclargest(arr){
//    for(let i=0;i<arr.length;i++){
//         if(arr[i]!==arr[i+1]){
//             return arr[i+2]
//         }
//    }
// }

// console.log(seclargest(sorted))


// function removeDuplicates(sorted){
//     let filtered=[]

//     for(let i=0;i<sorted.length;i++){
//         if(sorted[i]!==sorted[i+1]){
//             filtered.push(sorted[i])
//         }
//     }
//     return filtered
// }

// console.log(removeDuplicates(sorted))
// let result=removeDuplicates(sorted)


// function thirdLargest(arr){
//     let n=arr.length
//     for(let i=0;i<n;i++){
//         return arr[i+2]
//     }
// }
// console.log(thirdLargest(result))



//////




function secondLargest(arr){
    let largest=-Infinity

    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            largest=arr[i]
        }
    }

    let secondLargest=-Infinity

    for(let i=0;i<arr.length;i++){
        if(arr[i]>secondLargest&&arr[i]<largest){
            secondLargest=arr[i]
        }
    }
    return secondLargest
}

let number=[10,20,30,49]
console.log(secondLargest(number))

