let evenNumber = (num)=>{
    let even = [];
    for (let i = 0; i < num.length; i++){
        if(num[i] % 2 === 0){
            even += num[i];
        }
    }

    return even;
}

console.log(evenNumber([1,2,3,4,5,6,7]));
