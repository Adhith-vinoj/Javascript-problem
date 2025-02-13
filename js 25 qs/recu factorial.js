let recuFact = (num)=>{
    if ( num === 0 || num === 1){
        return 1;
    }

    return num * recuFact(num - 1);
}

console.log(recuFact(5));


let testCae = ()=>{
    let input = [
        5,
        3,
        4
    ];

    let output = [
        120,
        6,
        1
    ];

    for(let i = 0; i < input.length; i++){
        let result = recuFact(input[i]);
        if(result === output[i]){
            console.log(`test ${i+1}passed`);
        }else{
            console.log(`test ${i+1}failed`);
        }
    }
};

testCae();

