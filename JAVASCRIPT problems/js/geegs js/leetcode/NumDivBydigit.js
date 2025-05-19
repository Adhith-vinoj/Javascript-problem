// Given an integer num, return the number of digits in num that divide num.

// An integer val divides nums if nums % val == 0.





function digitDiv(num){
    let arr=num.toString().split('').map(Number)
    

    let count=0
    for(let i=0;i<arr.length;i++){
        if(num%arr[i]===0){
            count++
        }
    }
    return count 
}
console.log(digitDiv(1248))


///////]