function sumOfAll(arr){
    let result=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]<10){
            result.push(arr[i])
        }else{
            let splited=arr[i].toString().split('').map(Number)

            for(let j=0;j<splited.length;j++){
                result.push(splited[j])
            }
        }

    }
    return(result)
}
let array=[1,2,34,5]
console.log(sumOfAll(array))