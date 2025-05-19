// You are given positive integers n and m.

// Define two integers as follows:

// num1: The sum of all integers in the range [1, n] (both inclusive) that are not divisible by m.
// num2: The sum of all integers in the range [1, n] (both inclusive) that are divisible by m.
// Return the integer num1 - num2.








// function diffreceDivandNonDiv(n,m){
//     let sumofDiv=0
//     let sumofNDiv=0
//     let canDiv=[]
//     let canNdiv=[]
//     for(let i=0;i<=n;i++){
//         if(i%m===0){
//             canDiv.push(i)
//             for(let j=0;j<canDiv.length;j++){
//                 sumofDiv+=canDiv[j]
//             }
//         }else{
//             canNdiv.push(i)
//             for(let k=0;k<canNdiv.length;k++){
//                 sumofNDiv+=canNdiv[k]
//             }
//         }
//     }
//     return sumofNDiv-sumofDiv
// }
// console.log(diffreceDivandNonDiv(10,3))




function differenceDivandNonDiv(n,m){
    let sumOfDiv=0
    let sumofNDiv=0
    let canDiv=[]
    let canNdiv=[]

    for(let i=1;i<=n;i++){
        if(i%m===0){
            canDiv.push(i)
            sumOfDiv+=i
        }else{
            canNdiv.push(i)
            sumofNDiv+=i
        }
    }
    return sumofNDiv-sumOfDiv
}

console.log(differenceDivandNonDiv(10,3))


//]////]
