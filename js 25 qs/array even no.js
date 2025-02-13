
// write a javscript function that uses an array of an numbers and only give a new array with even number
function arrayEven(arr){

    let newArray = [];
    for (let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            newArray.push(arr[i]);
        }
    }

    return newArray;
}

console.log(arrayEven([1,2,3,4,5,6,7,8]));


// test case
 
let evenTest = () =>{
    let input = [
       [1, 2, 3, 4, 5, 6, 7, 8],
       [0, 3, 4, 7, 9],
       [2, 4, 6, 8, 10 ,11]
    ];

    let output = [

        [2 ,4, 6, 8],
        [0, 4],
        [2, 4, 6, 8, 10, 11]

    ];
   for (let i = 0; i < input.length; i++){
    let result = arrayEven(input[i]);
    if(result.toString() === output[i].toString()) {
        console.log(`test ${i + 1} passed`)
    }else{
        console.log(`test ${i + 1} failed`)
    }
}
};

evenTest();
