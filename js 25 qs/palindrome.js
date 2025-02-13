let palindromeIs = (str)=>{
    let palindrome = "";
    for (let i = 0; i < str.length; i++) {
        if(str[i] !== " "){
            palindrome += str[i]
        }
    }

    let left = 0;
    let right = palindrome.length -1;



    while (left < right){
         if(palindrome[left] !== palindrome[right]){
            return false;
         }
         left++;
         right--;
     }

     return true;
}

console.log(palindromeIs("no lemon, no melon"));


let testCae = ()=>{
    let input = [
        "no lemon, no melon",
        "was it a car or a cat i saw",
        "hello"
    ];

    let output = [
        true,
        true,
        true
    ];

    for(let i = 0; i < input.length; i++){
        let result = palindromeIs(input[i]);
        if(result === output[i]){
            console.log(`test ${i+1}passed`);
        }else{
            console.log(`test ${i+1}failed`);
        }
    }
};

testCae();

