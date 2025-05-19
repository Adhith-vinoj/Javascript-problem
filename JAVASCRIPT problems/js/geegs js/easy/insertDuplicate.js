//Given an array arr consisting of N integers and an integer K, the task is to insert an adjacent K for every occurrence of it in the original sequence and then truncate the array to the original length using an O(1) auxiliary space.


// function duplicates(arr,k){
//     let n=arr.length

//     for(let i=0;i<n;i++){

//         if(arr[i]==k){
//             arr.splice(i+1,0,k)
//             i++

//             arr.pop()
//         }
//     }
//     return arr
// }

// let arr=[1,2,0,4,0,5,8]

// console.log(duplicates(arr,0))



//]]]



// let Duplicates = (arr, k) =>{
//      for(i = 0; i < arr.length; i++){                          
//         if(arr[i] === k){
//             arr.splice(i+1, 0 , k)
//             i++
//             arr.pop()

//         }

//      }

//      return arr;
// }

// console.log(Duplicates([1,2,0,4,0,5,8], 0))







let duplicates = (arr, k) => {

    for(i = 0; i < arr.length; i++){
       if(arr[i] === k){
        arr.splice(i+1,0,k)
        i++
        arr.pop()
       }

    }
    return arr;
    
}

console.log(duplicates([1,2,0,4,0,5,8], 0));







