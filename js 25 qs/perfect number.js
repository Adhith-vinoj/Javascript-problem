let perfectNumber = (num)=>{
    let sum = 0;
    for(let i = 1; i <= num / 2; i++) {

        if(num % i === 0){
            sum += i;
        }

    }

    return sum === num ?  `${num} is a perfect number.` : `${num} is not perfect number`;
}

console.log(perfectNumber(6));


