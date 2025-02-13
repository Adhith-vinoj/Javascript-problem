let ascending = (arr)=>{
    return arr.sort((a, b) => a - b);
 }

let ascendingNumber = [1,3,4,7,2,9,3,10,5];
console.log(ascending(ascendingNumber));

let testCase = ()=>{
    let input = [
        [1, 3, 5, 2, 7, 6, 8],
        [3, 1, 8, 2, 4, 6, 5],
        [10, 4, 1]
    ];

    let output = [
        [1, 2, 3, 5, 6, 7, 8],
        [1, 2, 3, 4, 5, 6, 8],
        [4, 5, 10]
    ];

    for(let i = 0; i < input.length; i++){
        let number = ascending(input[i]);
        if(number.toString() === output[i].toString()){
            console.log(`test ${i+1} passed`)
        }else{
            console.log(`test ${i+1}failed`)
        }
    }
};
testCase();