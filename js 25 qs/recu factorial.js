let recuFact = (num)=>{
    if ( num === 0 || num === 1){
        return 1;
    }

    return num * recuFact(num - 1);
}

console.log(recuFact(5));

