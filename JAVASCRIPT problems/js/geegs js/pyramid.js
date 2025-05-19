// function pyramid(rows){
//     let result=''
//     for(let i=0;i<rows;i++){
//         let line=""

//         for(let j=0;j<rows-i;j++){
//             line+=" "
//         }

//         for(let k=0;k<2*i+1;k++){
//             line+="$"
//         }
//         result+=line+"\n"
//     }
//     return result
// }
// console.log(pyramid(10))




///]]

function star(row) {
    let result = '';

    // Upper pyramid
    for (let i = 0; i < row; i++) {
        let line = '';

        // Spaces before stars
        for (let j = 0; j < row - i; j++) {
            line += ' ';
        }

        // Stars
        for (let k = 0; k < 2 * i + 1; k++) {
            line += '*';
        }

        result += line + '\n';
    }

    // Lower inverted pyramid
    for (let i = row - 2; i >= 0; i--) {
        let line = '';

        // Spaces before stars
        for (let j = 0; j < row - i; j++) {
            line += ' ';
        }

        // Stars
        for (let k = 0; k < 2 * i + 1; k++) {
            line += '*';
        }

        result += line + '\n';
    }

    return result;
}

console.log(star(5));



/////]]]]]]]]]]]]]]]]]]]]]]]]]]]










///

// missing number












