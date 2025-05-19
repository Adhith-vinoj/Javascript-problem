// function mix(arr,offset){
//     let result=[]
//     for(let i=0;i<arr.length;i++){
//         let newIndex=(i+offset)%arr.length
//         result[newIndex]=arr[i]
//     }
//     return result
// }
// let arr = [1, 2, 3, 4, 5];
// console.log(mix(arr, 2));




// function mixarray(arr,offset){
//     let result=new Array(arr.length)

//     for(let i=0;i<arr.length;i++){
//         let newIndex=(i+offset)%arr.length
//         result[newIndex]=arr[i]
//     }
//     return result
// }



// const test=()=>{
//     let input=[1, 2, 3, 4, 5]
//     let offset=2
//     let expected=[4, 5, 1, 2, 3]


//     let result=mixarray(input,offset)

//    return JSON.stringify(result)===JSON.stringify(expected)?'passed':'failed'
// }
// test()










// function mixarray(arr, offset) {
//     let result = new Array(arr.length); // Ensuring the array has proper indices

//     for (let i = 0; i < arr.length; i++) {
//         let newIndex = (i + offset) % arr.length;
//         result[newIndex] = arr[i];
//     }
//     return result;
// }

// const test = () => {
//     let input = [1, 2, 3, 4, 5];
//     let offset = 3;
//     let expected = [3, 4, 5, 1, 2];

//     let result = mixarray(input, offset); // Pass offset

//     return JSON.stringify(result) === JSON.stringify(expected) ? "passed" : "failed";
// };

// console.log(test()); // Output: "passed"
