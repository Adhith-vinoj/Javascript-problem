

// function removeDuplicates(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp=arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=temp
//             }
//         }
//     }
//     return arr
// }
// let arr=[1,3,2,6,4,5,1,4,5]
// let sorted=removeDuplicates(arr)


// function dupe(arr){
//     let result=[]
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]!==arr[i+1]){
//             result.push(arr[i])
//         }
//     }
//     return result
// }
// console.log(dupe(sorted))








// function sort(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp=arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=temp
//             }
//         }
//     }
//     return arr
// }


// let arr=[1,1,2,3,3,2,5,7,6,4,5,8,6]
// // console.log(sort(arr))

// let sorted=sort(arr)

// function duplicte(sorted){
//     let result=[]
//     for(let i=0;i<sorted.length;i++){
//         if(sorted[i]!==sorted[i+1]){
//             result.push(arr[i])
//         }
//     }
//     return result
// }


// console.log(duplicte(sorted))









// function removeDuplicates(arr){
//     let result=[]

//     for(let i=0;i<arr.length;i++){
//         let isDuplicate=false

//         for(let j=0;j<result.length;j++){
//             if(arr[i]===result[j]){
//                 isDuplicate=true
//                 break
//             }
//         }
//         if(!isDuplicate){
//             result[result.length]=arr[i]
//         }
//     }
//     return result

// }
// let arr = [1, 2, 2, 3, 4, 4, 5, 6, 6];
// console.log(removeDuplicates(arr));


;



function removeDuplicates(arr){
    let result=[]
    
    for(let i=0;i<arr.length;i++){
        let isDuplicate=false

        for(let j=0;j<result.length;j++){
            if(arr[i]===result[j]){
                isDuplicate=true
                break
            }
        }
        if(!isDuplicate){
            result.push(arr[i])
        }
    }
    return result
}

let arr=[1,2,3,3,4,5,6,6,3,4]
console.log(removeDuplicates(arr))



