
// write a javscript function that uses an array of an numbers and only give a new array with even number
function arrayEven  (arr){

    let newArray = [];
    for (let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            newArray += arr[i];
        }
    }

    return newArray;
}

console.log(arrayEven([1,2,3,4,5,6,7,8]));

