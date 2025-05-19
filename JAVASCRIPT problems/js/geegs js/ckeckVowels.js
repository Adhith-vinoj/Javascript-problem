var vowels=['a','e','i','o','u']

function checkVowel(char){
    char=char.toLowerCase()
    for(let i=0;i<vowels.length;i++){
        if(char===vowels[i]){
            return `${char} is a vowel`
        }   
    }
    return `${char} is a consonent`
}

console.log(checkVowel('A'))


