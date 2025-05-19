

let Duplicates = (arr, k) =>{
    for(i = 0; i < arr.length; i++){                          
       if(arr[i] === k){
           arr.splice(i+1, 0 , k)
           i++
           arr.pop()

       }

    }

    return arr;
}

console.log(Duplicates([1,2,0,4,0,5,8], 0))



