// function sortArray(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = 0; j < arr.length - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// let numbers = [3,2,3,4,1,5,8,9,66,5,4,4,3,3,45,5,6,3,3,5,5,5,4,3,2,2];
// let sorted = sortArray(numbers);

// function removeDuplicates(arr) {
//     let final = [];
    
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== arr[i - 1]) { 
//             final.push(arr[i]);
//         }
//     }
    
//     return final;
// }

// console.log(removeDuplicates(sorted));







function sortedArray(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j+1]
                arr[j+1]=arr[j]
                arr[j]=temp
            }
        }
    }
    return arr
}
let number=[1,2,7,6,9,3,2,40,90,500,3847,5,7]
console.log(sortedArray(number))



