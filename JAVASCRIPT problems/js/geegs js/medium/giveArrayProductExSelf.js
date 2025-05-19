// Given an array arr[] of n integers, construct a product array res[] (of the same size) such that res[i] is equal to the product of all the elements of arr[] except arr[i]. 




function productExceptSelf(arr) {
    let n = arr.length;
    let res = new Array(n).fill(1);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i !== j) {
                res[i] *= arr[j];
            }
        }
    }
    return res;
}

let arr = [10, 3, 5, 6, 2];
console.log(productExceptSelf(arr))







