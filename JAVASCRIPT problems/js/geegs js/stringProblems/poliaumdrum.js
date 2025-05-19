// function palindrome(str){
//     let reversed=''

//     for(let char of str){
//         reversed=char+reversed
//     }
//     return str===reversed
// }
// console.log(palindrome("racecar"))



const palindrome=(str)=>{
    let reversed=''

    for(let char of str){
        reversed=char+reversed
    }
    return reversed
}
console.log(palindrome("racecar"))





