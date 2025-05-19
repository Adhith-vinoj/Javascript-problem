//Given an integer n, we need to repeatedly find the sum of its digits until the result becomes a single-digit number.



function singleDigit(num){
    while (num>9){
        let sum=0
        while(num>0){
            sum+=num%10
            num=Math.floor(num/10)
        }
        num=sum
    }
    return num
}


console.log(singleDigit(1234))
