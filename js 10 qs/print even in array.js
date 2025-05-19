let evenNumber = (num)=>{
    let even = [];
    for (let i = 0; i < num.length; i++){
        if(num[i] % 2 === 0){
            even.push( num[i]);
        }
    }

    return even;
}

console.log(evenNumber([1,2,3,4,5,6,7]));


let testCase = () =>{

    let input = [
        [1, 2, 3, 4, 5, 6, 7],
        [10, 15, 20, 25, 30],
        [9, 11, 13, 15, 17]
    ];
    let output = [
        [2, 4, 6],
        [10, 20, 30],
        []
    ];
    
    for(let i = 0; i < input.length; i++){
        let number = evenNumber(input[i]);
        if(number.toString() === output[i].toString()){
            console.log(`test ${i+1} passed`)
        }else{
            console.log(`test ${i+1}failed`)
        }
    }
};
testCase();




