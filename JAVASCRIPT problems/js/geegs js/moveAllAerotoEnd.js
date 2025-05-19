//Given an array of integers arr[], the task is to move all the zeros to the end of the array while maintaining the relative order of all non-zero elements.


function moveZerosToEnd(arr){
    let nonZeroIndex=0


    for(let i=0;i<arr.length;i++){
        if(arr[i]!==0){
            [arr[i],arr[nonZeroIndex]]=[arr[nonZeroIndex],arr[i]]
            nonZeroIndex++
        }
    }
    return arr
}
let arr = [0, 1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9];
console.log(moveZerosToEnd(arr)); 




////
















