// function waveSort(arr){
//     arr.sort((a,b)=>a-b)
//     let n=arr.length


//     for(let i=0;i<n-1;i+=2){
//         let temp=arr[i]
//         arr[i]=arr[i+1]
//         arr[i+1]=temp
//     }
//     return arr
// }
// let arr = [3, 6, 5, 10, 7, 20];
// console.log(waveSort(arr));







// function test() {
//     let input = [3, 6, 5, 10, 7, 20];
//     let expected = [5, 3, 7, 6, 20, 10];

//     let passed=true

//     for(let i=0;i<input.length;i++){
//         let result=waveSort(input[i])


//         for(let j=0;j<result.length;j++){
//             if (result[i]!==expected[i][j]){
//                 passed=false
//                 break
//             }
//         }
//         console.log(passed?'test passed':'test filed')
//     }
// }

// test();



// function test() {
//     let input = [3, 6, 5, 10, 7, 20];
//     let expected = [5, 3, 7, 6, 20, 10];

//     let result = waveSort(input); // Call function once and use a copy of input

//     let passed = true;
//     for (let i = 0; i < expected.length; i++) {
//         if (result[i] !== expected[i]) {
//             passed = false;
//             break; // Exit early if test fails
//         }
//     }

//     console.log(passed ? '✅ Test Passed' : '❌ Test Failed');
// }

// test();



// function waveSort(arr) {
//     arr.sort((a, b) => a - b); // Ensure arr is sorted
//     let n = arr.length;

//     for (let i = 0; i < n - 1; i += 2) {
//         let temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//     }
//     return arr;
// }

// function test() {
//     let inputs = [[3, 6, 5, 10, 7, 20], [1, 2, 3, 6]];
//     let expected = [[5, 3, 7, 6, 20, 10], [2, 1, 3, 6]];

//     let allPassed = true;

//     for (let i = 0; i < inputs.length; i++) {
//         let inputCopy = [...inputs[i]]; // Create a copy to avoid modifying original
//         let result = waveSort(inputCopy); // Pass a valid array

//         let passed = result.length === expected[i].length;

//         // Compare arrays using a loop
//         for (let j = 0; j < result.length; j++) {
//             if (result[j] !== expected[i][j]) {
//                 passed = false;
//                 break;
//             }
//         }

//         console.log(passed ? `✅ Test ${i + 1} Passed` : `❌ Test ${i + 1} Failed\nExpected: [${expected[i]}]\nGot: [${result}]`);
//         if (!passed) allPassed = false;
//     }

//     console.log(allPassed ? '🎉 All tests passed successfully!' : '❌ Some tests failed.');
// }

// test();



///]



function compare(arr,arr2){
    if(JSON.stringify(arr)===JSON.stringify(arr2)) {

        return true
    }else{
        return false
    }   
}
let arr=[1,2,4]
let arr2=[1,2,3]
console.log(compare(arr,arr2))



//////]