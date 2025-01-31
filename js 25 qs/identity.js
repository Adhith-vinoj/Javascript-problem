let identityMatrix = (mat)=>{
    let n = mat.length;

    for (let i = 0; i < n; i++){
    for ( let j = 0; j < n; j++){
       if(i === j && mat[i][j] !== 1){
        return false;
       }
       if(i !== j && mat[i][j] !== 0){
        return false;
       }
       
    }
    }
    return true;
}


let mat1 = [
        [1 , 0, 0]
        [0 ,1, 0]
        [0 , 0, 1]
    ]; 

 let mat2 = [ 
      [1 , 0, 0]
      [0 , 2, 0]
      [0,  0, 1]
 
];

console.log(identityMatrix(mat1));
 