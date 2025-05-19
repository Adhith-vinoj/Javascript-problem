function stringDup(str){
    let charCount={}

    for(let char of str){
        if(charCount.hasOwnProperty(char)){
            charCount[char]++
        }else{
            charCount[char]=1
        }
    }
    return Object.values(charCount)
}
let str='aabbccdd'

let arr=stringDup(str)

function equal(arr){
    for(let i=1;i<arr.length;i++){
        if(arr[i]!==arr[0]){
            return false
        }
    }
    return true
}

console.log(equal(arr))