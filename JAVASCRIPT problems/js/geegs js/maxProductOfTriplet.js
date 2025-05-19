//Given an integer array, find a maximum product of a triplet in the array.

function maxProductOfTriplet(arr){

    let n=arr.length
    arr.sort((a,b)=>a-b)

    let option1=arr[n-1]*arr[n-2]*arr[n-3]

    return option1
}
let arr = [ 10, 3, 5, 6, 20 ];
console.log(maxProductOfTriplet(arr));

//

