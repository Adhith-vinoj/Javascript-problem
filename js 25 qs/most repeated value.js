 
// write a program to find the most repeated value in an array of numbers
let reapeatedValue = (arr)=>{
  
    let mostRepeated = [];

    for(let i = 0; i < arr.length; i++){
        let num = arr[i];
        mostRepeated[num] = (mostRepeated[num] || 0) + 1;
    }

    let findReapeatValue = null;
    let maxCount = 0;

    
    for(let num in mostRepeated){
    if(mostRepeated[num] > maxCount){
        findReapeatValue = num;
        maxCount = mostRepeated[num];
    }
}

    return findReapeatValue;
}

console.log(reapeatedValue([1,2,2,3,4,5,6,2,2]));


let mostRepeatedTest = ()=>{
 let input = [
    [1, 2, 3, 2, 4, 5, 6],
    [2, 3, 3, 3, 4, 3],
    [1, 2, 3, 4, 5, 6, 4]
 ];

 let output = [
    2,
    3,
    4
 ];


 for(let i = 0; i < input.length; i++){
    let number = reapeatedValue(input[i]);
    if(number === output[i]){
        console.log(`test${i+1} passed`)
    }else{
        console.log(`test ${i+1}failed`)
    }
 }

};
mostRepeatedTest();




console.log