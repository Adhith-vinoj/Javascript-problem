// function findConsicutive(arr){
//     let count=1
//     let maxCount=1
//     let letters=[]
//     let temp=[arr[0]]
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i+1]==arr[i]+1){
//             count++
//             temp.push(arr[i+1])
//         }else{
//             count=1
//             temp=[arr[i+1]]
//         }
//         if(maxCount<count){
//             maxCount=count
//             letters=[...temp]
//         }
//         letters.push( arr[i])
//     }
//     return `${maxCount}  ${letters}`
// }
// let arr=[1,2,5,8,9,10]
// console.log(findConsicutive(arr))




// ///]]]]]]

// function findConsicutive(arr) {
//     let count = 1; 
//     let maxCount = 1;

//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i + 1] == arr[i] + 1) {
//             count++;
//         } else {
//             count = 1;
//         }

//         if (maxCount < count) {
//             maxCount = count;
//         }
//     }

//     return `${maxCount}`;
// }

// let arr = [1, 2, 5, 8, 9, 10];
// console.log(findConsicutive(arr));





//////]]]]]]]]]






