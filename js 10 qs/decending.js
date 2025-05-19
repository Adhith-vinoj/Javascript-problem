let decending = (arr)=>{
    let number = arr.sort((a, b) => b - a);
   return number;
    
}

let decendingOrder = [1,2,3,4,5,6,7,8];

console.log(decending(decendingOrder));


let testCase = ()=>{
    let input = [
        [1, 3, 5, 2, 7, 6, 8],
        [3, 1, 8, 2, 4, 6, 5],
        [10, 4, 2]
    ];

    let output = [
        [8, 7, 6, 5, 3, 2, 1],
        [8, 6, 5, 4, 3, 2, 1],
        [11, 10, 4]
    ];

    for(let i = 0; i < input.length; i++){
        let number = decending(input[i]);
        if(number.toString() === output[i].toString()){
            console.log(`test ${i+1} passed`)
        }else{
            console.log(`test ${i+1}failed`)
        }
    }
};
testCase();