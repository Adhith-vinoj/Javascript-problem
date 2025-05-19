


// function maximumWords(sentences){
//     let maxWord=0

//     let arr=sentences.join(" ").split(/\s+/)

//     for(let i=0;i<arr.length;i++){
//         let count=0
//         for(let j=0;j<arr.length;j++){
//             if(arr[i]!==arr[j]){
//                 count++
//             }
//         }
//         if(count>maxWord){
//             maxWord=count
//         }
//     }
//     return maxWord


// }
// const sentences = [
//     "This is a short sentence.",
//     "Here is another example with more words in it.",
//     "One more, just to test the maximum number of words in any sentence from this list!"
// ];

// console.log(maximumWords(sentences))




function maximumWords(sentences){
    let maxWord = 0;

    let arr = sentences.join(" ").toLowerCase().split(/\s+/); // Convert to lowercase & split into words

    for(let i = 0; i < arr.length; i++){
        let count = 0; 

        for(let j = 0; j < arr.length; j++){
            if(arr[i] === arr[j]){ 
                count++; // Increase count when a match is found
            }
        }

        if(count > maxWord){ 
            maxWord = count;
        }
    }
    
    return maxWord;
}

const sentences = [
    "This is a short sentence.",
    "Here is another example with more words in is it.",
    "One more, just to test the maximum number of words in any sentence from this list!"
];

console.log(maximumWords(sentences));




////]]]




