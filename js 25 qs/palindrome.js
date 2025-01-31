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
