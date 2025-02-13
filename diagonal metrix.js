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



let testCase = ()=>{
    let input = [
       [[1, 0, 0], [0, 5, 0], [0, 0, 9]],
       [[1, 2, 0], [0, 5, 0], [0, 0, 9]],
       [[1, 0, 0], [0, 0, 0], [0, 1, 1]]
    ];

    let output = [
        true,
        false,
        true
    ];

    for(let i = 0; i < input.length; i++){
        let number = diagonalMatrix(input[i]);
        if(number === output[i]){
            console.log(`test ${i+1} passed`)
        }else{
            console.log(`test ${i+1}failed`)
        }
    }
};
testCase();