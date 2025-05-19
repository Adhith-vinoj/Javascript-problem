



// function nestedDupe(arr){
//     let duplicate=[]

//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr[i].length;j++){

//             let isDuplicate=false

//             for(let k=0;k<arr.length;k++){
//                 if(j!==k&&arr[i][j]===arr[j][k]){
//                     isDuplicate=true
//                     break
//                 }
//             }
//             if(isDuplicate){
//                 duplicate.push(arr[i][j])
//             }
//         }
//     }
//     return duplicate
// }
// let arr = [
//     [1, 2, 3, 4, 5, 4], 
//     [1, 2, 3, 4, 5, 5]
// ];

// console.log(nestedDupe(arr));


// function nestedDupe(arr) {
//     let duplicate = []; // Store duplicate elements

//     for (let i = 0; i < arr.length; i++) { // Loop through sub-arrays
//         for (let j = 0; j < arr[i].length; j++) { // Loop through elements
//             let isDuplicate = false;

//             for (let k = 0; k < arr[i].length; k++) {
//                 if (j!== k && arr[i][j] === arr[i][k]) { // Compare elements, not arrays
//                     isDuplicate = true;
//                     break;
//                 }
//             }

//             if (isDuplicate && !duplicate.includes(arr[i][j])) { // Avoid duplicate entries in the result
//                 duplicate.push(arr[i][j]);
//             }
//         }
//     }
//     return duplicate;
// }

// // Example Usage
// let arr = [
//     [1, 2, 3, 4, 5, 4], 
//     [1, 2, 3, 4, 5, 5]
// ];

// console.log(nestedDupe(arr));


//]]]





function nestedDupe(arr){
    let duplicate=[]

    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            let isDuplicate=false

            for(let k=0;k<arr[i].length;k++){
                if(j!=k&&arr[i][j]===arr[i][k]){
                    isDuplicate=true
                    break
                }
            }
            if(isDuplicate&&!duplicate.includes(arr[i][j])){
                duplicate.push(arr[i][j])
            }
        }
    }
    return duplicate
}
let arr = [
    [1, 2, 3, 4, 5, 4,4,1], 
    [, 2, 3, 4, 5, 5]
];

console.log(nestedDupe(arr))






////]]]]]]]]]]]]]]]]]]]]
