// check the given alphabet is vowel or consonant

function alphabet(val){


    switch(val){
        case "a":
           return  "vowels" ;
        case  "e":
            return "vowels";
        case  "i" :
            return  "vowels";
        
        case  "o" :
             return "vowels";
        case "u" :
             return  "vowels";



            default :
            return "consonant";     

    }  

}

console.log(alphabet("a"));


let testCase = () =>{
    let input = ["a", "e", "i",];
    let output = [
        "vowels",
        "vowels",
        "consonant",
        
    ];

    for(let i = 0; i < input.length; i++){
        let result = alphabet( input[i]);
        if(result === output[i]){
            console.log(`test ${i+1}passed`)
        }else{
            console.log(`test ${i+1}failed`)
        }
    }

    
};

testCase();