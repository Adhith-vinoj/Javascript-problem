// function longestWord(sentence){
//     let words=sentence.split(" ")
//     let longest=""

//     for (let word of words){
//         if(word.length>longest.length){
//             longest =word
//         }
//     }
//     return longest
// }

// console.log(longestWord("JavaScript is an amazing programming language"))







///find first non repeating charecter

// function firstNonRepeatingChar(str){
//     let charCount={}


//     for(let i=0;i<str.length;i++){
//         let char=str[i]
//         if(charCount[char]===undefined){
//             charCount[char]=1
//         }else{
//             charCount[char]++
//         }
//     }

//     for(let i=0;i<str.length;i++){
//         if(charCount[str[i]]===1){
//             return str[i]
//         }
//     }
//     return null
// }
// console.log(firstNonRepeatingChar('aaddgffe'))

