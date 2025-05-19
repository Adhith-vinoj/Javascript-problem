// function removeDup(arr){
//     let array=[]
//     for (i=1;i<arr.length;i++){
//         if(arr[i]!==arr[i+1]){
//             array.push(i)
//         }
//     }
//     return array
// }

// let array=[1,2,2,3,4,4,5,6,2]

// console.log(removeDup(array))




// function removeDup(arr){
//     let array=[]
//     let dup=[]


//     for(let i=0;i<arr.length;i++){
//         let isDuplicate=false

//         for(let j=0;j<array.length;j++){
//             if(arr[i]===array[j]){
//                 isDuplicate=true
//                 dup.push(arr[i])
//                 break
//             }
//         }

//         if(!isDuplicate){
//             array.push(arr[i])
//         }
//     }
//     return {array,dup}
// }

// let array=[1,2,3,2,2,3,4,5,6,7]

// console.log(removeDup(array))






////]]]]]]]





function removedup(arr){
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
let arr=[1,1,2,3,4,5,3,5]
console.log(removedup(arr))