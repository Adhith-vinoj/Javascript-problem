function pyramid(rows){
    for(let i=0;i<=rows;i++){
        let str=""
        for(let j=1;j<=rows-i;j++){
            str+=" "
        }
        for(let k=1;k<=2*i-1;k++){
            str +="$"
        }
        console.log(str)
    }
}
pyramid(8)
