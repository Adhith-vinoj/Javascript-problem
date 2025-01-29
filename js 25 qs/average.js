// write a program to find  the average of an array of a number


let average =(arr)=>{
    let sum = 0;
    for(i = 0; i < arr.length; i++){
        sum += arr[i];
    }

    let avg = sum / arr.length;
    return avg;

}
console.log(average([2,10]));
