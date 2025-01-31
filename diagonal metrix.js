let diagonalMatrix = (mat)=>{
     for (let i = 0; i < mat.length; i++){
        for(let j = 0; j < mat[i].length; j++){
            if(i !== j && mat[i][j] !== 0){
                return false;
            }
        }
     }
     return true;

}

let  mat1 = [
    [1 , 0, 0],
    [0 , 5, 0],
    [0 , 0, 9]
];

let mat2 = [ 
    [1, 2, 0],
    [0, 5, 0],
    [0, 0, 9]
];

console.log(diagonalMatrix(mat1));
 

