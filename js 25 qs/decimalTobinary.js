let decimalToBinary = (dec)=>{

 let decimal = dec.toString(2);
 return decimal;

}

console.log(decimalToBinary(10));


let decimalTest = () =>{
    let input = [
        10,
        5,
        7
    ]

    let output = [
        "1010",
        "101",
        "1111"
    ]


    for(let i = 0; i < input.length; i++){
        let number = decimalToBinary(input[i]);
        if( number === output[i]){
            console.log(`test ${i+1} passed`)
        }else{
            console.log(`test ${i+1} failed`)
        }
    }
};

decimalTest();