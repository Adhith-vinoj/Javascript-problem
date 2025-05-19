
function string(str){
    let result = "";
    for( let i = str.length -1; i >= 0; i--){

        result += str[i];
        
    }

    return result;

  }

  console.log(string("adhith"));


  
let testCase = () =>{

    let input = [
        "adhith",
        "english",
        "man"
    ];
    let output = [
        "htihda",
        "dna",
        "nam"
    ];
    
    for(let i = 0; i < input.length; i++){
        let number = string(input[i]);
        if(number === output[i]){
            console.log(`test ${i+1} passed`)
        }else{
            console.log(`test ${i+1}failed`)
        }
    }
};
testCase();






  