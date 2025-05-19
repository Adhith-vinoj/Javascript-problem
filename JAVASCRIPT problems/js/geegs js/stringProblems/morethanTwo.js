// function stringDuplictes(str){
//     let charCount={}
//     let result=[]
    

//     for(let char of str){
//         if(charCount.hasOwnProperty(char)){
//             charCount[char]++
//         }else{
//             charCount[char]=1
//         }
//         if(charCount[char]<=2){
//             result.push(char)
//         }
//     }
//     return result.join('')
// }
// let str='aadddddxxdsjdsssk'

// console.log(stringDuplictes(str))







// function stringDuplictes(str){
//     let charCount={}
//     let result=[]


//     for(let char of str){
//         if(charCount.hasOwnProperty(char)){
//             charCount[char]++
//         }else{
//             charCount[char]=1
//         }
//         if(charCount[char]<=2){
//             result.push(char)
//         }
//     }
//     return 
// }




function stringDuplictes(str){
    let charCount={}
    let result=[]

    for(let char of str){
        if(charCount.hasOwnProperty(char)){
            charCount[char]++
        }else{
            charCount[char]=1
        }
        if(charCount[char]<=2){
            result.push(char)
        }
    }
    return result.join('')
}








