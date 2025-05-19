function sortedArray(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j+1]
                arr[j+1]=arr[j]
                arr[j]=temp
            }
        }
    }
    return arr
}

let number=[1,-2,7,6,9,3,2,40,90,-500,3847,5,7]
let sorted=sortedArray(number)


function removeNeg(arr){
    let result=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
            result.push(arr[i])
        }
    }
    return result
}

console.log(removeNeg(sorted))




///]]\








