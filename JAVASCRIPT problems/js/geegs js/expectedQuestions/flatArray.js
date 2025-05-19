// function flattenArray(arr){
//     let result=[]
//     for(let item of arr){
//         if(Array.isArray(item)){
//             result=result.concat(flattenArray(item))
//         }else{
//             result.push(item)
//         }
//     }
//     return result
// }

// const nestedArray = [1, [2, [3, [4, 5]], 6], 7];
// console.log(flattenArray(nestedArray)); 






function flattenArray(arr){
    let result=[]
    for(let item of arr){
        if(Array.isArray(item)){
            result.concat(flattenArray(item))
        }else{
            result.push(item)
        }
    }
    return result
}