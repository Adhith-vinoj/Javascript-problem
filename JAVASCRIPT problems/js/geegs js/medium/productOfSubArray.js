// function countSubArray(arr,k){
//     let 
// }  


///find subArray


function findSubArray(arr){
    let subArrays=[]


    for(let i=0;i<arr.length;i++){
        let subArray=[]
        for(let j=i;j<arr.length;j++){
            subArray.push(arr[j])
            subArrays.push(subArray.slice())
        }
    }
    return subArrays
}
let arr=[1,2,34,5]
let subs=findSubArray(arr)



function findsum(subs){
    let resultA=[]


    for(let i=0;i<subs.length;i++){
        let sum=0
        for(let j=0;j<subs[i].length;j++){
            sum+=subs[i][j]
        }
        resultA.push(sum)
    }
    return resultA
}

console.log(findsum(subs))
