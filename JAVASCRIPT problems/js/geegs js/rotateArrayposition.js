// Given an array of integers arr[] of size n, the task is to rotate the array elements to the left by d positions.



// function rotateArray(arr,offset){
    
//     for(let i=0;i<arr.length;i++){
//         arr[i]=arr[i+offset]
//     }
//     return arr
// }

// let list =[1,3,2,4,5,3,2,9]
// console.log(rotateArray(list))




// function rotateArray(arr, offset) {
//     let n = arr.length;
//     offset = offset % n; // Handle cases where offset > array length

//     if (offset === 0) return arr;

//     reverse(arr, 0, n - 1);        // Step 1: Reverse the whole array
//     reverse(arr, 0, offset - 1);   // Step 2: Reverse first `offset` elements
//     reverse(arr, offset, n - 1);   // Step 3: Reverse remaining elements

//     return arr;
// }

// // Helper function to reverse elements between `start` and `end` using temp variable
// function reverse(arr, start, end) {
//     while (start < end) {
//         // Swap using a temporary variable
//         let temp = arr[start];
//         arr[start] = arr[end];
//         arr[end] = temp;

//         start++;
//         end--;
//     }
// }

// // Example usage
// let list = [1, 3, 2, 4, 5, 3, 2, 9];
// let offset = 3;
// console.log(rotateArray(list, offset));




//]]]]]]]]]]


function rotateWithD(arr,d){
    for(let i=0;i<d;i++){
        arr.push(arr.shift())
    }
    return arr
}
let arr=[1,2,3,4,5,6]
let d=2
console.log(rotateWithD(arr,d))

////]