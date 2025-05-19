


function longestCommonPrefix(arr){
    let prefix=""

    for(let i=0;i<arr.length;i++){
        let char=arr[0][i]

        for(let j=1;j<arr.length;j++){
            if(i>=arr[j].length||arr[j][i]!==char){
                return prefix
            }
        }
        prefix+=char
    }
    return prefix
}



const words=["flower","flow","fligt"]
console.log(longestCommonPrefix(words))




//////