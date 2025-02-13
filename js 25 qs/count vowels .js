// write a program to count the numbers of vowels in a string
let vowelsCount = (str)=>{
    const vowels = "aeiouAEIOU";
    let count = 0;

    for ( let i = 0; i < str.length; i++){
        if(vowels .indexOf(str[i]) !== -1){
            count++;
        }

    }

    return count;
}

console.log(vowelsCount("abcdefghi"));
 
let vowelsTest = () =>{


    let input = [
        "abcdefgh",
        "bcdefghou",
        "123@#eiou"
    ]

    let output = [
        2,
        3,
        2
    ]



  for(let i = 0; i < input.length; i++){
    let result = vowelsCount(input[i]);
    if(result === output[i]){
        console.log(`test ${i + 1} passed`)
    }else {
        console.log(`test ${i + 1} failed`)
    }
}
};

vowelsTest();