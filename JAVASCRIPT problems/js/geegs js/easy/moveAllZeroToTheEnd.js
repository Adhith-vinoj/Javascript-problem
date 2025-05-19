// function moveZerotoEnd(arr){
//     let j=0

//     for(let i=0;i<arr.length;i++){
//         if(arr[i]!==0){
//             let temp=arr[i]
//             arr[i]=arr[j]
//             arr[j]=temp
//             j++
//         }
//     }
//     return arr
// }
// let arr = [0, 1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9];
// console.log(moveZerotoEnd(arr));





function moveZerotoEnd(arr){
    let index=0

    for(let i=0;i<arr.length;i++){
        if(arr[i]!==0){
            temp=arr[i]
            arr[i]=arr[index]
            arr[index]=temp
            index++
        }
    }
    return arr
}
let array=[1,0,3,0,2,4,0]
console.log(moveZerotoEnd(array))



////]


let blac = (arr) =>{
   let index = 0;
   for(i = 0; i < arr.length; i++){
    if(arr[i]!== 0){
        arr[i] = arr[index]; 
        arr[index] = arr[i]
        index++;

    }

   }

   return arr;
}

console.log(blac([1,2,4,0,6,4,0,6]));





let numberRotate = (arr, k)=>{
    for(i = 0; i< k; i++){
    let result = arr[arr.length-1]
    for(j = arr.length-1; j > 0; j--){
        arr[j]= arr[j-1]
    }
    arr[0] = result
    }

    return arr;
   
}


console.log(numberRotate([1,2,3,4,5], 3))

