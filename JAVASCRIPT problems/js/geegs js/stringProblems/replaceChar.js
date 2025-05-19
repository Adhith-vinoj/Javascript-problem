function urlEncode(str){
    let result=''

    for(let char of str){
        result+=(char==='a')?'b':char
    }
    return  result
}
console.log(urlEncode("JavaScript is fun"))


