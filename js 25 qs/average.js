// write a program to find  the average of an array of a number


let average =(arr)=>{
    let sum = 0;
    for(i = 0; i < arr.length; i++){
        sum += arr[i];
    }

    let avg = sum / arr.length;
    return avg;

}
console.log(average([4,4]));

let averageTest = () => {
    let input = [
         [4, 4],
         [3, 3],
         [4, 8]
    ];

    let output = [

          4,
          3,
          5

    ];

    for(let i = 0; i < input.length; i++){
        let number  = average(input[i]);
        if(number === output[i]){
            console.log(`test ${i+1} passed`);
        }else{
              console.log(`test ${i+1} failed`)
        }
    }
};

averageTest();
