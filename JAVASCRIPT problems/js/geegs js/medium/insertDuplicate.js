//Given an array arr consisting of N integers and an integer K, the task is to insert an adjacent K for every occurrence of it in the original sequence and then truncate the array to the original length using an O(1) auxiliary space.




// function insertDuplicate(arr,k){


//    for (let i = arr.length - 1; i >= 0; i--){
//         if(k==arr[i]){
//           arr.splice(i+1,0,k)
//         }
//     }
//     return arr
// }
// let arr = [1, 0, 2, 3, 0, 4, 5, 0]
// console.log(insertDuplicate(arr,0))


// function insertDuplicate(arr,k){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===k){
//             arr.splice(i+1,0,k)
//             i++
//         }
//     }
//     return arr
// }
// let arr = [1, 0, 2, 3, 0, 4, 5, 0]
// console.log(insertDuplicate(arr,0))





function insertDuplicate(arr, k) {
    let n = arr.length;

    // Create a new array with enough space
    let result = new Array(n * 2);  
    let j = 0; // Pointer for the new array

    for (let i = 0; i < n; i++) {
        result[j] = arr[i]; // Copy original element
        j++;

        if (arr[i] === k) {
            result[j] = k; // Insert duplicate
            j++;
        }
    }

    // Resize result array to match new size
    return result.slice(0, j);
}

let arr = [1, 0, 2, 3, 0, 4, 5, 0];
console.log(insertDuplicate(arr, 0));

