// You are given a 0-indexed string s typed by a user. Changing a key is defined as using a key different from the last used key. For example, s = "ab" has a change of a key while s = "bBBb" does not have any.

// Return the number of times the user had to change the key.

// Note: Modifiers like shift or caps lock won't be counted in changing the key that is if a user typed the letter 'a' and then the letter 'A' then it will not be considered as a changing of key.














// function changeKey(str){
//     let count=0
//     let arr=str.split('')
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]!==arr[i+1]){
//             count++
//         }
//     }
//     return count
// }
// console.log(changeKey('aaaaaa'))


/////]]]]]]

// function changeKey(str){
//     let count=0
//     let arr=str.toLowerCase()
//     let og=arr.split('')
//     for(let i=0;i<og.length-1;i++){
//         if(og[i]!==og[i+1]){
//             count++
//         }
//     }
//     return count
// }

// let arr='aAbBcCdDssssssAaa'
// console.log(changeKey(arr))


//]]]]]]]]]]]]]]]]]








function palindrome(str){
    let word=''

    for(let wo of str){
        word=wo+word
    }
    return word
}
console.log(palindrome('adl'))


