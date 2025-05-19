//Given an unsorted array of size n. Array elements are in the range of 1 to n. One number from set {1, 2, …n} is missing and one number occurs twice in the array. The task is to find these two numbers.


// function sum(arr){
//     let n=arr.length
//     let sum=0
//     let actsum=0
//     let lastNum=arr[n-1]
    

//     for(let j=0;j<=lastNum;j++){
//         actsum+=j
//     }


//     for(let i=0;i<n;i++){
//         sum+=arr[i]
//     }
//     return actsum-sum


// }
// let arr=[1,2,3,4,5,7]
// console.log(sum(arr))





function missing(num){
    for(let i=0;i<num.length;i++){
        if(num[i+1]!==num[i]+1){
            return num[i]+1
        }
    }
}
console.log(missing([1,2,3,4,6]))




////]]]]]










