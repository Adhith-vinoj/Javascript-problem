// function sumof(num){
//     let arr=num.toString().split('').map(Number)
//     let sum=0
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i]
//     }
//     return sum<10?sum:sumof(sum)
// }
// console.log(sumof(1234))






function sumOf(num){
    let arr=num.toString().split('').map(Number)
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    return sum<10?sum:sumOf(sum)
}
console.log(sumOf(1234))





/////





