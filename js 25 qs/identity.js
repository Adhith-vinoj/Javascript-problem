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
};


let mat1 = [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1]
    ]; 

 let mat2 = [ 
      [1, 0, 0],
      [0, 2, 0],
      [0, 0, 1]
 
];

console.log(identityMatrix(mat1));

let identityTest = () => {
    let input = [
        [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1]
        ],

        [
            [1, 0, 0],
            [0, 2, 0],
            [0, 0, 1]
        ],
        [
            [1, 0],
            [0, 1]
        ]
    ];

    let output = [
        true,
        false,
        false
    ];

    for(let i = 0; i < input.length; i++){
        let result = identityMatrix(input[i]);
        if(result === output[i]){
              console.log(`test ${i+1} passed`)
        }else{
            console.log(`test ${i+1} failed`)
        }

    }
};
identityTest();
 