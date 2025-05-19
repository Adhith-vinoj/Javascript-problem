// Given an integer number n, return the difference between the product of its digits and the sum of its digits.
 




function diffBtsumandProduct(num){
    let arr=num.toString().split('').map(Number)
    let product=1
    let sum=0
    for(let i=0;i<arr.length;i++){
        product*=arr[i]
        sum+=arr[i]
    }
    return product-sum
}
console.log(diffBtsumandProduct(61))