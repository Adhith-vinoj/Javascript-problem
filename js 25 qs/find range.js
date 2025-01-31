let range = (arr)=>{

    let maximum = Math.max(...arr);
    let minimum = Math.min(...arr);

    return maximum - minimum;
}

let numbers = [1,2,5,8,10];

console.log(range(numbers));