// write a program that return the transpose of a given matrix

let transpose = (matrix)=>{
    let rows = matrix.length;
    let cols = matrix[0].length;

    let transNumber = [];

    for (let i = 0; i < cols; i++){
        transNumber[i] = [];
        for( let j = 0; j < rows; j++){
            transNumber[i][j] = matrix[j][i];
        }
    }

    return transNumber;

}
let matrix =[
             [1,2,3],
             [4,5,6],
             [7,8,9] 
                    ];
                    
   console.log(transpose(matrix));       
