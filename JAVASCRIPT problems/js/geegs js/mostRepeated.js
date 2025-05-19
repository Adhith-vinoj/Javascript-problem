

function repeated(arr){
    let maxCount=0
    let mostRepeated=null
    for(let i=0;i<arr.length;i++){
        let count=0

        for(let j=0;j<arr.length;j++){
            if(arr[i]===arr[j]){
                count++
            }
        }
        if(count>maxCount){
            maxCount=count
            mostRepeated=arr[i]
        }
    }
    return `${mostRepeated} ${maxCount}`
}

let list=[1,2,3,4,4,4,4,5,5,5,5,5,5,6]
console.log(repeated(list))
