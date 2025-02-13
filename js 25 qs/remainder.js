// write a program to calculate the remainder of two numbers

function remainder(num, val){
    return num % val;
}
console.log(remainder(5,3))


let testCae = ()=>{
    let input = [
        [5, 3],
        [10, 3],
        [7, 1],
    ];

    let output = [
        2,
        1,
        1
    ];

    for(let i = 0; i < input.length; i++){
        let result = remainder(input[i][0], input[i][1]);
        if(result === output[i]){
            console.log(`test ${i+1}passed`);
        }else{
            console.log(`test ${i+1}failed`);
        }
    }
};

testCae();

