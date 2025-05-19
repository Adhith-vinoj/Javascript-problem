



// function primeOrNot(num){
    


//     for (let i=2;i<num-1;i++){
//         if(num%i==0){
//             return false
//         }
//     }
//     return true
// }

// console.log(primeOrNot(6))



function primeorNorWithInRange(range){
    

    let result=[]
    for(let i=2;i<range;i++){
        if(primeOrNot(i)===true)
            result.push(i)
    }
    return result
}

console.log(primeorNorWithInRange(100))


///]]]