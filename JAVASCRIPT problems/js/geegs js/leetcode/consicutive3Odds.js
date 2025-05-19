// Given an integer array arr, return true if there are three consecutive odd numbers in the array. Otherwise, return false.







// function consecutive3Odd(arr){
//     let isOdd=false
//     let check=false
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2==1){
//             isOdd =true
//             if(arr[i+1]&&arr[i+2]&&arr[i+3]){
//                return check=true
//             }else{
//                 return false
//             }
//         }
//     }
// }
// let arr=[1,2,3,5,3,9,2]

// console.log(consecutive3Odd(arr))




function consecutive3Odd(){
    let check=false

    for(let i=0;i<arr.length;i++){

        if(arr[i+1]%2===1&&arr[i+2]%2===1&&arr[i+3]%2===1){
            return check=true
        }
    }
    return check
}
let arr=[1,2,3,5,2,9,3,5,2]

console.log(consecutive3Odd(arr))



/////]]]]