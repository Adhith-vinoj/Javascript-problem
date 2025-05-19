//Given an integer array arr[] and an integer ele the task is to the remove all occurrences of ele from arr[] in-place and return the number of elements which are not equal to ele. If there are k number of elements which are not equal to ele then the input array arr[] should be modified such that the first k elements should contain the elements which are not equal to ele and then the remaining elements.



function countOcuurence(arr,elm){
    let count=0

    for(let num of arr){
        if(num===elm){
            count++
        }
    }
    return count
}
let arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];

console.log(countOcuurence(arr,4))



