let range = (arr)=>{

    let maximum = Math.max(...arr);
    let minimum = Math.min(...arr);

    return maximum - minimum;
}

let numbers = [1,2,5,8,10];

console.log(range(numbers));

let rangeTest = () =>{
   let input = [
          [1, 2, 4, 6, 8, 10],
          [2, 5, 6, 8],
          [3, 7, 9, 11]
   ];

   let output = [
           9,
           6,
           7
   ];

   for( let i = 0; i <input.length; i++){
    let result = range(input[i]);
    if(result === output[i]){
        console.log(`test ${i+1} passed`)
    }else{
        console.log(`test ${i+1} failed`)
    }
   }
};
rangeTest();